import { ReactElement } from 'react'
import ResumeSection from './ResumeSection.js'
import experiences from '../data/experience.json'
import ExperienceSection from './ExperienceSection.js'

const Experience = (): ReactElement => {
  return (
    <ResumeSection title='Experiences' subtitle="I've achieved so far" border>
      <div className='flex flex-col gap-20'>
        {experiences.map((exp) => (
          <ExperienceSection
            key={exp.company}
            title={exp.title}
            company={exp.company}
            logoFile={exp.logoFile}
            website={exp.website}
            period={exp.period}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </ResumeSection>
  )
}

export default Experience
