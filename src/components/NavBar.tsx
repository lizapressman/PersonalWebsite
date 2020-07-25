
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavBar = () => {
  return (

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
            <NavDropdown.Item href="https://github.com/lizapressman" style={{ color: "#328fa9" }}>Github</NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/lizapressman/" style={{ color: "#328fa9" }}>LinkedIn</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Resume.pdf" style={{ color: "#328fa9" }}>Resume</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="Resume.pdf" style={{ color: "#328fa9" }}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

