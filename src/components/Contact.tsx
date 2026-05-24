import { Component } from '@geajs/core'

export default class Contact extends Component {
  template() {
    return (
      <section class="section section--alt" id="contact">
        <div class="container">
          <h2 class="section-heading">Let&rsquo;s Talk</h2>
          <div class="prose">
            <p>
              Have a project in mind or want to explore how I can help? Drop me a line.
            </p>
          </div>
          <a href="mailto:hello@mgsdev.co.uk" class="btn btn--primary btn--lg">
            hello@mgsdev.co.uk
          </a>
        </div>
      </section>
    )
  }
}
