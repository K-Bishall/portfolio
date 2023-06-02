import { ReactElement } from 'react'
import TechStacks from './TechStacks.js'
import Experience from './Experience.js'
import Projects from './Projects.js'

const Resume = (): ReactElement => {
  return (
    <div id='resume' className='flex flex-col gap-20'>
      <TechStacks />
      <Experience />
      <Projects />
    </div>
  )
}

export default Resume
