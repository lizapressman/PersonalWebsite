
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// import logo from './../images/logo.jpg'

export const NavBar = () => {
  return (
    // <nav className="menu" id="menu">
    //   <ul id="navContainer">
    //     <li className="navelem"><a href="resume.pdf">Resume</a></li>
    //     <li className="navelem"><a href="#contact">Contact</a></li>
    //     <li className="navelem"><a href="#portfolio">Portfolio</a></li>
    //     <li className="navelem"><a href="#experience">Experience</a></li>
    //     <li className="navelem"><a href="#about-me">About</a></li>
    //     <li className="navelem"><a href="#header">Home</a></li>
    //     {/* <li class = "navelem"><a href="#header"><img src={logo} class ="navelem" style={{"height":"2vh"}}/></a></li> */}
    //   </ul>
    // </nav>

    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#header">Liza Pressman</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#header">Home</Nav.Link>
          <Nav.Link href="#about-me">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <NavDropdown title="Links" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/lizapressman">Github</NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/lizapressman/">LinkedIn</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="resume.pdf">Resume</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="resume.pdf">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

