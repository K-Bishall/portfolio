import { ReactElement, useEffect, useMemo, useState } from 'react'

const Navbar = (): ReactElement => {
  const [currentItem, setCurrentItem] = useState('home')

  const navItems = useMemo(
    () => ({
      home: 'Home',
      about: 'About',
      resume: 'Resume',
      projects: 'Projects',
    }),
    [],
  )

  useEffect(() => {
    const element = document.getElementById(currentItem)
    const nav = document.getElementById('nav')!
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const navheight = nav.getBoundingClientRect().height

      const offsetPosition = elementPosition - document.body.getBoundingClientRect().top - navheight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [currentItem])

  return (
    <nav
      id='nav'
      className='bg-gray-50 w-full flex gap-5 md:gap-10 justify-center md:justify-end items-center py-6 px-32 sticky top-0 z-50'
    >
      {Object.entries(navItems).map((entry) => {
        const key = entry[0]
        const value = entry[1]

        return (
          <a
            key={key}
            href={`#${value}`}
            className={
              'font-bold transition-colors duration-500 ' +
              (key === currentItem ? 'text-orange-500' : 'text-gray-500 hover:text-black')
            }
            onClick={() => setCurrentItem(key)}
          >
            {value}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar
