import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='text-start'>
        <Navbar.Brand href="#home">Passion Chasers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Courses</Nav.Link>
            <Nav.Link >FAQ</Nav.Link>
            <Link to='/blog' className='text-decoration-none text-white'>Blog</Link>
            <Nav.Link>toogle Theme</Nav.Link>
          </Nav>
          <Nav className='mt-2'>
            <Link className='mb-sm-3 mb-3  me-lg-3' to='/login'>
                <Button variant="primary">Login</Button>
            </Link>
            <Link className='hover-warning' to='/register'>
            <Button  variant="info">SignUp</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;