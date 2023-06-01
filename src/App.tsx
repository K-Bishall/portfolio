import './App.css'
import Navbar from './sections/Navbar.js'
import Intro from './sections/Intro.js'
import About from './sections/About.js'

function App() {
  return (
    <>
      <Navbar />
      <div className='px-32 bg-gray-50 text-gray-500'>
        <Intro />
        <About />
      </div>
    </>
  )
}

export default App
