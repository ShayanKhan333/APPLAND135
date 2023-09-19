import React from 'react'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div id="main">
      <Navbar/>
      <div className="name">
        <h1><span>Make A good Website</span> With Confidence And Creativity.</h1>
        <p className="details">Lorem ipsum, dolor sit amet consectetur adipisicing elit.    maiores, provident sunt vitae sed perspiciatis voluptates consequatur.</p>
      <a href="#" className="cv-btn">Download</a>
      </div>
    </div>
  )
}

export default Header
