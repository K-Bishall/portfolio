import { ReactElement } from 'react'
import flag from '../assets/Nepal-Flag.svg'
import Contacts from './components/Contacts.js'
import ConnectButton from './components/ConnectButton.js'

const Intro = (): ReactElement => {
  return (
    <div
      id='home'
      className={
        'bg-contain bg-no-repeat bg-right border-b flex flex-col justify-center items-center ' +
        'md:items-start gap-5 text-gray-500 text-center md:text-left ' +
        `md:bg-background`
      }
      style={{ height: '90vh' }}
    >
      <p className='text-4xl font-semibold'>Hello, I'm</p>
      <p className='text-6xl font-extrabold text-gray-600'>Bishal Karki</p>
      <p className='text-4xl font-semibold'>Software Engineer</p>
      <p className='text-2xl flex gap-2 items-center'>
        <span>Nepal</span> <img src={flag} alt='Flag' className='h-5' />
      </p>

      <ConnectButton className='my-5' />

      <Contacts />
    </div>
  )
}

export default Intro
