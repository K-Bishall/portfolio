import './App.css'
import Navbar from './sections/Navbar.js'
import Intro from './sections/Intro.js'
import About from './sections/About.js'
import Resume from './sections/resume/Resume.js'
import Footer from './sections/Footer.js'

function App() {
  return (
    <div className='bg-gray-50 text-gray-800'>
      <Navbar />
      <div className='flex flex-col gap-20 px-5 md:px-10 lg:px-32'>
        <Intro />
        <About />
        <Resume />
      </div>
      <Footer />
    </div>
  )
}

export default App
