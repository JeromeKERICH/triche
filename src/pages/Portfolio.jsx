import React, { useEffect } from 'react'
import { PortfolioHero } from '../components/portfolio/PortfolioHero'
import { TestimonialGrid } from '../components/portfolio/PortfolioTestimonial'
import { PortfolioCTA } from '../components/portfolio/PortfolioCTA'
import { ProjectShowcase } from '../components/portfolio/PortfolioGrid'
import { DesignProcess } from '../components/portfolio/PortfolioProcess'

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
      <PortfolioHero/>
      <ProjectShowcase/>
      <TestimonialGrid/>
      <DesignProcess/>
      <PortfolioCTA/>
      
    </div>
  )
}

export default Portfolio
