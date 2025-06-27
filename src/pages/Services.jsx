import React, { useEffect } from 'react'
import { ServiceHero } from '../components/services/ServiceHero'
import { TrustSection } from '../components/services/ServiceTrust'
import { CaseStudy } from '../components/services/ServiceCase'
import { ServicesGrid } from '../components/services/ServiceGrid'


const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
  return (
    <div>
      <ServiceHero/>
      <ServicesGrid/>
      <TrustSection/>
 
     
    </div>
  )
}

export default Services
