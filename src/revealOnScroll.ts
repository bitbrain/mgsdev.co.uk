type RevealOnScrollOptions = {
  root?: ParentNode
}

const REVEAL_SELECTOR = '[data-reveal]'
const REVEAL_GROUP_SELECTOR = '[data-reveal-group]'
const VIEWPORT_EPSILON = 2

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top <= viewportHeight - VIEWPORT_EPSILON && rect.bottom >= VIEWPORT_EPSILON
}

export function initRevealOnScroll(options: RevealOnScrollOptions = {}) {
  const { root = document } = options
  const revealElements = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))

  if (revealElements.length === 0) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const supportsObserver = 'IntersectionObserver' in window

  if (prefersReducedMotion || !supportsObserver) {
    revealElements.forEach((element) => {
      element.classList.add('is-visible')
    })
    return
  }

  document.documentElement.classList.add('has-reveal')

  const groups = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_GROUP_SELECTOR))
  groups.forEach((group) => {
    const children = Array.from(group.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    children.forEach((child, index) => {
      if (child.style.getPropertyValue('--reveal-delay')) {
        return
      }

      const delayMs = Math.min(index * 70, 210)
      child.style.setProperty('--reveal-delay', `${delayMs}ms`)
    })
  })

  const initiallyVisible = new Set(
    revealElements.filter((element) => isElementInViewport(element))
  )

  initiallyVisible.forEach((element) => {
    element.classList.add('is-visible')
  })

  const deferredElements = revealElements.filter((element) => !initiallyVisible.has(element))
  if (deferredElements.length === 0) {
    return
  }

  document.documentElement.classList.add('has-reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        const element = entry.target as HTMLElement
        element.classList.add('is-visible')
        observer.unobserve(element)
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px'
    }
  )

  deferredElements.forEach((element) => {
    observer.observe(element)
  })
}
