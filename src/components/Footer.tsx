import { Component } from '@geajs/core'

export default class Footer extends Component {
  template() {
    return (
      <footer class="site-footer">
        <div class="container site-footer__inner">
          <p class="site-footer__copy">
            &copy; 2026 proudly built with{' '}
            <a
              href="https://geajs.com"
              class="site-footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              geajs
            </a>
          </p>
        </div>
      </footer>
    )
  }
}
