import React from 'react'
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <BootstrapNavbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          React Learning
        </BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/counter">Counter</Nav.Link>
          <Nav.Link as={NavLink} to="/todo">Todo List</Nav.Link>
          <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/form">Form</Nav.Link>
          <Nav.Link as={NavLink} to="/switch/1">Switch Case</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
