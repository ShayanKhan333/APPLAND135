import React from 'react'
import Header  from './components/Header'
import Feature from './components/feature'
import About from './components/About'
import Presentation from './components/presentation'
import Contact from './components/contact'
import Copyright from './components/Copyright'
import aboutimg from './assets/Frame 19.png'
import aboutimg1 from './assets/download.png'

const App = () => {
  return (
    <div>
      <Header/>
      <Feature/>
      <About img={aboutimg} title="Comes with all you need with Daily life." button="Get The Web" />
      <Presentation/>
      <About img={aboutimg1} title="Download and Get The Course Now." button="Get The Course" />
      <Contact/>
      <Copyright/>
    </div>
  )
}

export default App

