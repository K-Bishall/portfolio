import { ReactElement, useMemo } from 'react'
import man from '../assets/man.svg'
import { FaGithub, FaGitlab, FaLinkedinIn } from 'react-icons/fa'
import contacts from './contacts.json'

const Intro = (): ReactElement => {
  const contactItems = useMemo(
    () => [
      {
        icon: FaGithub,
        link: contacts['github'],
      },
      {
        icon: FaGitlab,
        link: contacts['gitlab'],
      },
      {
        icon: FaLinkedinIn,
        link: contacts['linkedin'],
      },
    ],
    [],
  )

  return (
    <div
      className='bg-contain bg-no-repeat bg-right border-b flex flex-col justify-center gap-5 text-gray-500'
      style={{ height: '90vh', backgroundImage: `url(${man})` }}
    >
      <p className='text-4xl font-semibold'>Hello, I'm</p>
      <p className='text-6xl font-extrabold text-gray-600'>Bishal Karki</p>
      <p className='text-4xl font-semibold'>Software Engineer</p>

      <div className='mt-5 flex gap-10 font-bold text-white'>
        <a
          href={contacts['linkedin']}
          target='_blank'
          className='bg-orange-500 py-3 px-8 rounded-full'
        >
          Hire me
        </a>
        <button className='bg-gray-500 py-3 px-8 rounded-full'>Download CV</button>
      </div>

      <div className='flex gap-5 text-orange-500 text-3xl'>
        {contactItems.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target='_blank'
            className='p-2 rounded-full border-2 border-orange-500'
          >
            {item.icon()}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Intro
