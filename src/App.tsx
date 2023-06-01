import './App.css'
import Navbar from './sections/Navbar.js'
import Intro from './sections/Intro.js'
import About from './sections/About.js'
import Resume from './sections/resume/Resume.js'
import Footer from './sections/Footer.js'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-20 px-32 bg-gray-50 text-gray-500'>
        <Intro />
        <About />
        <Resume />
      </div>
      <Footer />
    </>
  )
}

export default App
