import { ReactElement, ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  id?: string
  children: ReactNode
}

const ResumeSection = ({ title, subtitle, id, children }: Props): ReactElement => {
  return (
    <div id={id} className='border rounded-2xl py-5'>
      <h2 className='text-4xl font-bold text-center'>{title}</h2>
      <p className='mb-10 mt-2 text-center text-orange-500 font-medium'>{subtitle}</p>
      {children}
    </div>
  )
}

export default ResumeSection
