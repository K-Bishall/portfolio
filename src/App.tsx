import './App.css'
import Navbar from './sections/Navbar.js'
import Intro from './sections/Intro.js'

function App() {
  return (
    <>
      <Navbar />
      <div className='px-32 bg-gray-50'>
        <Intro />
      </div>
    </>
  )
}

export default App
