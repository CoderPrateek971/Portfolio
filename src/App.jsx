import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
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
      <div className='break'></div>
      <Contact/>
      <div className='break'></div>
      <Footer/>




    </div>
  )
}

export default App
