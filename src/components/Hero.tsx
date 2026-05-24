import { Component } from '@geajs/core'

export default class Hero extends Component {
  template() {
    return (
      <section class="hero" id="top">
        <div class="hero__portrait" aria-hidden="true" />
        <div class="container hero__inner">
          <div class="hero__col hero__col--left">
            <h1 class="hero__headline">
              <span class="hero__headline-line">Sustainable</span>
              <span class="hero__headline-line">software.</span>
            </h1>
            <h1 class="hero__headline hero__headline--second">
              <span class="hero__headline-line">Smarter</span>
              <span class="hero__headline-line">future.</span>
            </h1>
            <p class="hero__byline">
              <span class="hero__byline-prefix">Software consultancy by</span>
              <span class="hero__byline-name">Miguel Gonzalez Wanzek</span>
            </p>
          </div>

          <div class="hero__col hero__col--right">
            <h2 class="hero__subheadline">
              <span class="hero__subheadline-line">Navigating</span>
              <span class="hero__subheadline-line">times of AI.</span>
            </h2>
            <p class="hero__copy">
              Helping companies build sustainable software and make confident technology decisions in an AI-driven world.
            </p>
            <a href="mailto:hello@mgsdev.co.uk" class="btn btn--primary hero__cta">
              Let&rsquo;s Talk
            </a>
          </div>
        </div>
      </section>
    )
  }
}
