import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'

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

  const handleNavItemClick = useCallback((selectedItem: string) => {
    const element = document.getElementById(selectedItem)
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
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentItem(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0% -60% 0%',
        // threshold: 0.1,
      }, // Adjust rootMargin as needed
    )

    // Get all the section elements
    const sections = document.querySelectorAll(
      Object.keys(navItems)
        .map((key) => `#${key}`)
        .join(', '),
    )

    // Observe each section element
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      // Clean up the observer when the component unmounts
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [navItems])

  return (
    <nav
      id='nav'
      className='bg-gray-50 w-full flex gap-5 md:gap-10 justify-center md:justify-end items-center py-6 px-32 sticky top-0 z-50'
      style={{ height: '8vh' }}
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
            onClick={() => {
              setCurrentItem(key)
              handleNavItemClick(key)
            }}
          >
            {value}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar
