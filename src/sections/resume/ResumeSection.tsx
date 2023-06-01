import { ReactElement, ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  children: ReactNode
}

const ResumeSection = ({ title, subtitle, children }: Props): ReactElement => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-gray-800 text-center'>{title}</h2>
      <p className='mb-6 text-center text-orange-500 font-medium'>{subtitle}</p>
      {children}
    </div>
  )
}

export default ResumeSection
