import './App.css'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
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
      <div className='break'></div>
      <Projects/>
      <div className='break'></div>
      <Experience/>


    </div>
  )
}

export default App
