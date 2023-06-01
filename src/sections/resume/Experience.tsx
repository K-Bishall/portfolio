import { ReactElement } from 'react'
import ResumeSection from './ResumeSection.js'
import ExperienceSection from './ExperienceSection.js'

const Experience = (): ReactElement => {
  return (
    <ResumeSection title='Experiences' subtitle="I've achieved so far">
      <div className='flex flex-col gap-10'>
        <ExperienceSection />
        <ExperienceSection />
        <ExperienceSection />
      </div>
    </ResumeSection>
  )
}

export default Experience
