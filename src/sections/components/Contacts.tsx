import { useMemo } from 'react'
import { FaGithub, FaGitlab, FaLinkedinIn } from 'react-icons/fa'
import contacts from '../data/contacts.json'

const Contacts = () => {
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
  )
}

export default Contacts
