import { ReactElement } from 'react'
import photo from '../assets/photo.jpg'

const About = (): ReactElement => {
  return (
    <div id='about' className='py-20 flex gap-10'>
      <img src={photo} alt='Photo' className='w-52 h-52 rounded' />
      <div>
        <p className='text-4xl font-bold text-gray-800'>Bishal Karki</p>
        <p className='font-medium text-orange-500'>Software Engineer</p>
        <p className='py-5'>
          I am a versatile software engineer with experience in various domains, including
          influencer management platforms, financial reconcilers, and social apps. With my strong
          technical skills, problem-solving abilities, and proactive mindset, I excel in
          collaborating with cross-functional teams and delivering projects on time. I am constantly
          seeking personal and professional growth, open to feedback, and dedicated to continuous
          improvement.
        </p>
        <button className='bg-orange-500 py-3 px-8 rounded-full text-white font-bold'>
          Download CV
        </button>
      </div>
    </div>
  )
}

export default About
