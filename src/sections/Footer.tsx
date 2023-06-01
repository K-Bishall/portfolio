import { ReactElement } from 'react'

const Footer = (): ReactElement => {
  const year = new Date().getFullYear()
  return (
    <div className='border-t bg-orange-500 p-4'>
      <p className='text-center text-white font-medium'>&#169; Bishal Karki, {year}</p>
    </div>
  )
}

export default Footer
