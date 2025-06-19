import React, { useEffect } from 'react'
import { LearnHero } from '../components/learn/LearnHero'
import { ProblemSection } from '../components/learn/LearnProb'
import { StrategySection } from '../components/learn/LearnStrat'
import { ProcessSection } from '../components/learn/LearnProcess'
import { ChecklistCTA } from '../components/learn/LearnCheck'

const Learn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LearnHero/>
      <ProblemSection/>
      <ChecklistCTA/>
      <StrategySection/>
      <ProcessSection/>
      <ChecklistCTA/>
    </div>
  )
}

export default Learn
