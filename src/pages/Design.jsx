import React, { useEffect } from 'react'
import { StrategyHero } from '../components/design/StrategyHero';
import { StrategyProblem } from '../components/design/StrategyProb';
import { SolutionSection } from '../components/design/StrategySol';
import { StrategyProcess } from '../components/design/StrategyProcess';
import { StrategyPackages } from '../components/design/StrategyPackage';


const Design = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <StrategyHero/>
      <StrategyProblem/>
      <StrategyPackages/>
      <SolutionSection/>
      <StrategyProcess/>
      
    
    </div>
  )
}

export default Design
