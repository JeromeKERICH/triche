import React, { useEffect } from 'react'
import HeroSection from '../components/Hero'
import ProblemSolutionSection from '../components/Value'
import ServicesPreview from '../components/Services'
import TrustSection from '../components/WhyUs'
import LeadCaptureSection from '../components/Leads'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HeroSection/>
      <ProblemSolutionSection/>
      <ServicesPreview/>
      <TrustSection/>
      <LeadCaptureSection/>
    </div>
  )
}

export default Home
