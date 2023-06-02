import { ReactElement } from 'react'

interface Props {
  title: string
  company: string
  logoFile: string
  website: string
  period: string
  location: string
  description: string
}

const ExperienceSection = ({
  title,
  company,
  logoFile,
  website,
  period,
  location,
  description,
}: Props): ReactElement => {
  const logo = `src/assets/company-logos/${logoFile}`

  return (
    <div className='flex gap-8 px-8'>
      <a href={website} target='_blank'>
        <img src={logo} alt={company} className='w-60' />
      </a>
      <div>
        <h2 className='font-semibold text-2xl'>{title}</h2>
        <p className='font-semibold text-orange-500 text-lg'>{company}</p>
        <p>{period}</p>
        <p>{location}</p>

        <p className='mt-6'>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceSection
