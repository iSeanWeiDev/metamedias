import React from 'react';
import {Nav, Navbar, NavDropdown, Image, Container} from 'react-bootstrap'
import '../../styles/components/app-bar.scss';

export default function Appbar() {
  return (
    <Navbar expand="lg">
      <Container className="app-bar">
        <Navbar.Brand href="/">
          <Image src="/assets/imgs/ccs-logo-trans.gif" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about-us">ABOUT US</Nav.Link>
          <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
          <NavDropdown title="SERVICES" id="basic-nav-dropdown">
            <NavDropdown.Item href="/services">Services</NavDropdown.Item>
            <NavDropdown.Item href="/news">News</NavDropdown.Item>
            <NavDropdown.Item href="/costs">Costs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/search">Search</NavDropdown.Item>
            <NavDropdown.Item href="/job-info">Job Info</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Image src="/assets/imgs/alwaysabove.png" className="always-above" />
      </Container>
    </Navbar>
  )
}
