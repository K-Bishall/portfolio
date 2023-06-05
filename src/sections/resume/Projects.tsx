import { ReactElement } from 'react'
import ProjectItem from './ProjectItem.js'
import ResumeSection from './ResumeSection.js'
import projects from '../data/projects.json'

const Projects = (): ReactElement => {
  return (
    <ResumeSection id='projects' title='Projects' subtitle="I've contributed to">
      <div className='flex flex-wrap md:px-5 mt-10 w-full'>
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </div>
    </ResumeSection>
  )
}

export default Projects
