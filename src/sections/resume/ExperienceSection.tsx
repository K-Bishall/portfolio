import { ReactElement } from 'react'
import promoty from '../../assets/company-logos/Promoty.svg'

const ExperienceSection = (): ReactElement => {
  return (
    <div className='flex gap-5 border rounded-lg bg-gray-100 p-8'>
      <img src={promoty} alt={promoty} className='w-32 h-32' />
      <div className='flex flex-col'>
        <h2 className='font-semibold text-2xl'>Full Stack Developer</h2>
        <p className='font-semibold text-orange-500 text-lg'>Promoty Marketing OU</p>
        <p className=''>Jun 2021 - Aug 2022</p>
        <p className=''>Tallin, Estonia (Remote)</p>

        <p className='mt-6'>
          I am a versatile software engineer with experience in various domains, including
          influencer management platforms, financial reconcilers, and social apps. With my strong
          technical skills, problem-solving abilities, and proactive mindset, I excel in
          collaborating with cross-functional teams and delivering projects on time. I am constantly
          seeking personal and professional growth, open to feedback, and dedicated to continuous
          improvement.
        </p>
      </div>
    </div>
  )
}

export default ExperienceSection
