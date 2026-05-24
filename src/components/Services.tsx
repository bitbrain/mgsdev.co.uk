import { Component } from '@geajs/core'

export default class Services extends Component {
  template() {
    return (
      <section class="section section--alt" id="services">
        <div class="container">
          <h2 class="section-heading">Services</h2>
          <div class="grid grid--2col">
            <article class="card">
              <h3 class="card__title">Technical Strategy</h3>
              <p>
                Aligning technology decisions with business goals. From architecture reviews to roadmap planning, ensuring your tech investments pay off.
              </p>
            </article>

            <article class="card">
              <h3 class="card__title">AI Integration</h3>
              <p>
                Identifying where AI creates genuine value in your workflows. Practical adoption strategies without the hype.
              </p>
            </article>

            <article class="card">
              <h3 class="card__title">Software Architecture</h3>
              <p>
                Designing systems that scale gracefully. Clean boundaries, clear ownership, and maintainable codebases.
              </p>
            </article>

            <article class="card">
              <h3 class="card__title">Team Enablement</h3>
              <p>
                Helping engineering teams adopt better practices, tools, and workflows so they deliver with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}
