import { Component } from '@geajs/core'

export default class About extends Component {
  template() {
    return (
      <section class="section" id="about">
        <div class="container" data-reveal-group>
          <h2 class="section-heading" data-reveal>About</h2>
          <div class="prose" data-reveal>
            <p>
              I&rsquo;m Miguel Gonzalez Wanzek, <strong>founder of MGS DEV LTD</strong>, a software consultancy building <strong>sustainable software for the future of humankind</strong>.
            </p>
            <p>
              I specialise in <strong>simplifying complex systems</strong>, <strong>leading under pressure</strong> and helping teams deliver clear, reliable outcomes. My experience spans enterprise and startup engineering, incident management, fintech, adtech and practical agentic AI systems, including <strong>RAG, vector search and LLM evals</strong>.
            </p>
            <p>
              Outside work, I develop games with Godot Engine, contribute to FMOD integration and Godot core, and maintain <strong>open-source Godot addons with more than 3,000 GitHub stars</strong>.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
