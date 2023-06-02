import { ReactElement } from 'react'
import photo from '../assets/photo.jpg'
import contacts from './data/contacts.json'

const About = (): ReactElement => {
  return (
    <div
      id='about'
      className='flex flex-col md:flex-row items-center gap-10 text-center md:text-left'
    >
      <img src={photo} alt='Photo' className='w-60 h-60 rounded' />
      <div className='flex flex-col items-center md:items-start'>
        <p className='text-4xl font-bold'>Bishal Karki</p>
        <p className='font-medium text-orange-500'>Software Engineer</p>
        <p className='py-5 mb-5 text-left'>
          I am a versatile software engineer with experience in various domains, including
          influencer management platforms, financial reconcilers, and social apps. With my strong
          technical skills, problem-solving abilities, and proactive mindset, I excel in
          collaborating with cross-functional teams and delivering projects on time. I am constantly
          seeking personal and professional growth, open to feedback, and dedicated to continuous
          improvement.
        </p>
        <a
          href={contacts['linkedin']}
          target='_blank'
          className='bg-orange-500 py-3 px-8 rounded-full text-white font-bold max-w-min'
        >
          Connect
        </a>
      </div>
    </div>
  )
}

export default About
