import React from 'react'
import HeroSection from './heroSection'
import KarirSection from './karirSections/karirSection'
import StepsSection from './stepsSections/stepsSection'
import LowonganSection from './lowonganSections/lowonganSection'
import Footer from '../footer'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <KarirSection />
      <StepsSection />
      <LowonganSection />
      <Footer />
    </div>
  )
}

export default Home
