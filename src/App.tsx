import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Service from './components/Service'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
