import { useState } from 'react'

import './App.css'

import Navbar from './components/navbar';
import Banner from './components/banner';
import Process from './components/process';
import Projects from './components/projects';
import WorkTogether from './components/worktogether';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Banner/>
      <Process/>
      <Projects/>
      <WorkTogether/>
      <About/>
      <Contact/>
      <Footer/>
     
    </>
  )
}

export default App
