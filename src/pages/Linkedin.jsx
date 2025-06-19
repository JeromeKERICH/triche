import React, { useEffect } from 'react'
import { LinkedInHero } from '../components/linkedin/LinkHero'
import { LinkedInProblem } from '../components/linkedin/LinkProb';
import { ImagineSection } from '../components/linkedin/LinkImagine';
import { LinkedinPackages } from '../components/linkedin/LinkPackage';
import { FinalLinkedInCTA } from '../components/linkedin/LinkCTA';

const Linkedin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LinkedInHero/>
      <LinkedInProblem/>
      <ImagineSection/>
      <LinkedinPackages/>
      <FinalLinkedInCTA/>
    </div>
  )
}

export default Linkedin
