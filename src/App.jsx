import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <div className='break'></div>
      <Home/>
      <div className='break'></div>
      <AboutMe/>
      <div className='break'></div>
    </div>
  )
}

export default App
