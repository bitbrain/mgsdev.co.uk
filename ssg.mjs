/**
 * Static Site Generator for Gea.js
 *
 * Renders the App component to a fully static HTML string using a linkedom
 * DOM, then injects it into index.html. No client JavaScript is required.
 *
 * Process:
 *   1. Install linkedom-backed DOM globals so the Gea-compiled template code
 *      (which calls `document.createElement('template')`) can run in Node.
 *   2. Dynamically import the SSG bundle produced by `vite build --ssr`.
 *   3. Instantiate App, render into a detached container, capture innerHTML.
 *   4. Inject the rendered HTML into the `<div id="app">` of index.html.
 *   5. Copy public/ and src/styles.css into dist/.
 */

import { mkdir, readFile, writeFile, cp, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { parseHTML } from 'linkedom'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = __dirname
const SSR_DIR = resolve(ROOT, 'dist-ssg')
const OUT_DIR = resolve(ROOT, 'dist')
const PUBLIC_DIR = resolve(ROOT, 'public')
const INDEX_HTML_PATH = resolve(ROOT, 'index.html')
const STYLES_PATH = resolve(ROOT, 'src/styles.css')

function fail(message) {
  console.error(`[ssg] ${message}`)
  process.exit(1)
}

function installDom() {
  const { window, document } = parseHTML(
    '<!doctype html><html><head></head><body></body></html>',
  )

  const keys = [
    'window',
    'document',
    'HTMLElement',
    'Element',
    'Node',
    'DocumentFragment',
    'Event',
    'CustomEvent',
  ]

  const prev = {}
  for (const k of keys) prev[k] = globalThis[k]

  Object.assign(globalThis, {
    window,
    document,
    HTMLElement: window.HTMLElement,
    Element: window.Element,
    Node: window.Node,
    DocumentFragment: window.DocumentFragment,
    Event: window.Event,
    CustomEvent: window.CustomEvent,
  })

  return () => {
    for (const k of keys) globalThis[k] = prev[k]
  }
}

async function renderApp(App) {
  const restore = installDom()
  try {
    const container = document.createElement('div')
    const instance = new App()
    instance.render(container)
    const html = container.innerHTML
    if (typeof instance.dispose === 'function') instance.dispose()
    return html
  } finally {
    restore()
  }
}

function injectAppHtml(shellHtml, appHtml) {
  const marker = '<div id="app"></div>'
  if (!shellHtml.includes(marker)) {
    fail(`index.html does not contain '${marker}'.`)
  }

  let html = shellHtml.replace(marker, `<div id="app">${appHtml}</div>`)
  html = html.replace(
    /\s*<!--ssg:strip-start-->[\s\S]*?<!--ssg:strip-end-->/g,
    '',
  )
  return html
}

async function main() {
  if (!existsSync(SSR_DIR)) {
    fail('dist-ssg/ not found. Run `npm run build:ssg:bundle` first.')
  }

  const ssrModuleUrl = pathToFileURL(resolve(SSR_DIR, 'ssg.js')).href

  installDom()
  const { App } = await import(ssrModuleUrl)
  if (!App) fail('dist-ssg/ssg.js did not export `App`.')

  const shellHtml = await readFile(INDEX_HTML_PATH, 'utf-8')

  const routes = [{ path: '/', out: 'index.html' }]

  await rm(OUT_DIR, { recursive: true, force: true })
  await mkdir(OUT_DIR, { recursive: true })

  if (existsSync(PUBLIC_DIR)) {
    await cp(PUBLIC_DIR, OUT_DIR, { recursive: true })
  }

  await cp(STYLES_PATH, resolve(OUT_DIR, 'styles.css'))

  for (const { path, out } of routes) {
    const appHtml = await renderApp(App)
    const finalHtml = injectAppHtml(shellHtml, appHtml)
    const outPath = resolve(OUT_DIR, out)
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, finalHtml, 'utf-8')
    console.log(`[ssg] ${path} → ${out} (${finalHtml.length} bytes)`)
  }

  console.log(`[ssg] static site generated in ${OUT_DIR}`)
}

main().catch((err) => {
  console.error('[ssg] failed:', err)
  process.exit(1)
})
