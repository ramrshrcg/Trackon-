import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ApprovalBadges from './components/ApprovalBadges'
import WhyChoose from './components/WhyChoose'
import Features from './components/Features'
import GetStarted from './components/GetStarted'
import Industries from './components/Industries'
import MobileApp from './components/MobileApp'
import Clients from './components/Clients'
import TelecomPartners from './components/TelecomPartners'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import ExpertsReview from './components/ExpertsReview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ApprovalBadges />
      <WhyChoose />
      <Features />
      <GetStarted />
      <Industries />
      <MobileApp />
      <Clients />
      <TelecomPartners />
      <Products />
      <Testimonials />
      <ExpertsReview />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
