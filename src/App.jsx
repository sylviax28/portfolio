import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Homepage from './sections/Homepage'
import Projects from './sections/Projects'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
