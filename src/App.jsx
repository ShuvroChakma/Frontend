import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DigitalExperience from './components/DigitalExperience'
import Portfolio from './components/Portfolio'
import BrandValues from './components/BrandValues'
import CTA from './components/CTA'
import Services from './components/Services'
import Features from './components/Features'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DigitalExperience />
      <Portfolio />
      <BrandValues />
      <CTA />
      <Services />
      <Features />
      <Contact />
    </div>
  )
}

export default App
