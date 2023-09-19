import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
      <div className="about-img">
        <img src={props.img} alt="" />
      </div>
      <div className="about-text">
        <h2>{}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt minus molestiae modi earum eum officiis sed magnam voluptates vel quisquam? Perferendis reiciendis ipsam deleniti voluptas non ea, dolorem recusandae corrupti quam, soluta adipisci voluptatum fugit nihil in dicta cumque? Voluptatibus.</p>
     <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About
