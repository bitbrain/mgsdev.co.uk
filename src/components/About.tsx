import { Component } from '@geajs/core'

export default class About extends Component {
  template() {
    return (
      <section class="section" id="about">
        <div class="container">
          <h2 class="section-heading">About</h2>
          <div class="prose">
            <p>
              I&rsquo;m Miguel Gonzalez Wanzek, a software consultant helping companies navigate the evolving technology landscape. With years of experience building and scaling software systems, I bring a pragmatic approach to every engagement.
            </p>
            <p>
              I believe in sustainable software&mdash;solutions that are maintainable, adaptable, and built to last. Whether it&rsquo;s guiding an AI adoption strategy or redesigning a system architecture, I focus on long-term value over short-term fixes.
            </p>
            <p>
              Based in the UK, working with teams worldwide.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
