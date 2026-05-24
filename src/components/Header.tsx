import { Component } from '@geajs/core'

export default class Header extends Component {
  template() {
    return (
      <header class="site-header">
        <div class="container site-header__inner">
          <a href="#top" class="site-header__logo" aria-label="MGS DEV home">
            MGS DEV
          </a>
          <nav class="site-header__nav" aria-label="Primary">
            <a href="#services" class="site-header__link">Services</a>
            <a href="#approach" class="site-header__link">Approach</a>
            <a href="#about" class="site-header__link">About</a>
            <a href="#contact" class="site-header__link">Contact</a>
            <a href="mailto:hello@mgsdev.co.uk" class="btn btn--primary">
              Let&rsquo;s Talk
            </a>
          </nav>
        </div>
      </header>
    )
  }
}
