import { Component } from '@geajs/core'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default class App extends Component {
  template() {
    return (
      <div class="page">
        <Header />
        <main class="page__main">
          <Hero />
          <Features />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    )
  }
}
