import { ReactElement } from 'react'
import man from '../assets/man.svg'
import contacts from './data/contacts.json'
import flag from '../assets/Nepal-Flag.svg'
import Contacts from './Contacts.js'

const Intro = (): ReactElement => {
  return (
    <div
      className='bg-contain bg-no-repeat bg-right border-b flex flex-col justify-center gap-5 text-gray-500'
      style={{ height: '90vh', backgroundImage: `url(${man})` }}
    >
      <p className='text-4xl font-semibold'>Hello, I'm</p>
      <p className='text-6xl font-extrabold text-gray-600'>Bishal Karki</p>
      <p className='text-4xl font-semibold'>Software Engineer</p>
      <p className='text-2xl flex gap-2 items-center'>
        <span>Nepal</span> <img src={flag} alt='Flag' className='h-5' />
      </p>

      <div className='my-5 flex gap-10 font-bold text-white'>
        <a
          href={contacts['linkedin']}
          target='_blank'
          className='bg-orange-500 py-3 px-8 rounded-full'
        >
          Connect
        </a>
        {/*<button className='bg-gray-500 py-3 px-8 rounded-full'>Download CV</button>*/}
      </div>

      <Contacts />
    </div>
  )
}

export default Intro
