import { Component } from '@geajs/core'

export default class Features extends Component {
  template() {
    return (
      <section class="section section--compact" id="approach">
        <div class="container grid grid--3col" data-reveal-group>
          <article class="media-row" data-reveal>
            <div class="icon-circle" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14a4 4 0 0 1-1-1Z" />
                <path d="M5 19c2-5 6-8 11-9" />
              </svg>
            </div>
            <div class="media-row__body">
              <h3 class="media-row__title">Sustainable by design</h3>
              <p>
                Building software that lasts, adapts and reduces long-term complexity.
              </p>
            </div>
          </article>

          <article class="media-row" data-reveal>
            <div class="icon-circle" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9.5 4.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-1.5 4.4A2.5 2.5 0 0 0 7 16a2.5 2.5 0 0 0 2.5 2.5c.6 0 1.1-.2 1.5-.5V5c-.4-.3-.9-.5-1.5-.5Z" />
                <path d="M14.5 4.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 1.5 4.4A2.5 2.5 0 0 1 17 16a2.5 2.5 0 0 1-2.5 2.5c-.6 0-1.1-.2-1.5-.5V5c.4-.3.9-.5 1.5-.5Z" />
                <path d="M11 9h2" />
                <path d="M11 12h2" />
              </svg>
            </div>
            <div class="media-row__body">
              <h3 class="media-row__title">AI with purpose</h3>
              <p>
                Cutting through the hype to apply AI where it truly creates value.
              </p>
            </div>
          </article>

          <article class="media-row" data-reveal>
            <div class="icon-circle" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="8.5" cy="9" r="2.5" />
                <circle cx="15.5" cy="9" r="2.5" />
                <path d="M3.5 18c.6-2.4 2.6-4 5-4s4.4 1.6 5 4" />
                <path d="M13.5 18c.6-2.4 2.6-4 5-4 .7 0 1.4.1 2 .4" />
              </svg>
            </div>
            <div class="media-row__body">
              <h3 class="media-row__title">Partner, not just advisor</h3>
              <p>
                Working alongside your team to deliver real, lasting impact.
              </p>
            </div>
          </article>
        </div>
      </section>
    )
  }
}
