import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {

  return (
    <div>
      <Navbar/>
      <div className='break'></div>
      <Home/>
      <div className='break'></div>
      <AboutMe/>
      <div className='break'></div>
      <Skills/>
    </div>
  )
}

export default App
