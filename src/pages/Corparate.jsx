import React, { useEffect } from 'react'
import { NgoHero } from '../components/corparate/Ngo'
import { NGOProblem } from '../components/corparate/NgoProb';
import { ApproachSection } from '../components/corparate/NgoApproach';
import { NGOSolution } from '../components/corparate/Ngosol';
import { FinalNgoCTA } from '../components/corparate/NgoFinal';

const Corparate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <NgoHero/>
      <NGOProblem/>
      <ApproachSection/>
     
      <NGOSolution/>
      <FinalNgoCTA/>
    </div>
  )
}

export default Corparate
