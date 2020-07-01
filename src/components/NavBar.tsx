
import React from 'react'
// import logo from './../images/logo.jpg'

export const NavBar = () => {
  return (
    <nav className="menu" id="menu">
      <ul id="navContainer">
        <li className="navelem"><a href="Resume.pdf">Resume</a></li>
        <li className="navelem"><a href="#contact">Contact</a></li>
        <li className="navelem"><a href="#portfolio">Portfolio</a></li>
        <li className="navelem"><a href="#experience">Experience</a></li>
        <li className="navelem"><a href="#about-me">About</a></li>
        <li className="navelem"><a href="#header">Home</a></li>
        {/* <li class = "navelem"><a href="#header"><img src={logo} class ="navelem" style={{"height":"2vh"}}/></a></li> */}
      </ul>
    </nav>
  )
}