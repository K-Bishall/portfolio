import { ReactElement, ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  children: ReactNode
}

const ResumeSection = ({ title, subtitle, children }: Props): ReactElement => {
  return (
    <div className='border rounded-2xl py-5'>
      <h2 className='text-4xl font-bold text-center'>{title}</h2>
      <p className='mb-10 text-center text-orange-500 font-medium'>{subtitle}</p>
      {children}
    </div>
  )
}

export default ResumeSection
