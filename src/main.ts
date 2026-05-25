import App from './app'
import './styles.css'
import { initRevealOnScroll } from './revealOnScroll'

const root = document.getElementById('app')
if (!root) {
  throw new Error('#app root element not found')
}

const app = new App()
app.render(root)
initRevealOnScroll({ root })
