import React, { useEffect } from 'react'
import { StrategyHero } from '../components/design/StrategyHero';
import { StrategyProblem } from '../components/design/StrategyProb';
import { SolutionSection } from '../components/design/StrategySol';
import { StrategyProcess } from '../components/design/StrategyProcess';
import { StrategyPackages } from '../components/design/StrategyPackage';
import { FinalStrategyCTA } from '../components/design/StrategyCTA';

const Design = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <StrategyHero/>
      <StrategyProblem/>
      <SolutionSection/>
      <StrategyProcess/>
      <StrategyPackages/>
      <FinalStrategyCTA/>
    </div>
  )
}

export default Design
