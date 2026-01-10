import { useState } from 'react'
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Homepage from './sections/Homepage';
import Projects from './sections/Projects';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <div id="homepage" className="homepage"><Homepage /></div>
      <div id="about" className="about"><About /></div>
      <div id="projects" className="projects"><Projects /></div>
      <div id="contact" className="contact"><Contact /></div>
    </div>
  )
}

export default App
