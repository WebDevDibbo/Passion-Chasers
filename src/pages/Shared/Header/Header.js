import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Header.css";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="text-start">
        <Navbar.Brand href="#home">Passion Chasers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/courses"
              className="text-decoration-none  my-auto mx-lg-2"
            >
              Courses
            </Link>
            <Nav.Link>FAQ</Nav.Link>
            <Link to="/blog" className="blogs  my-auto mx-lg-2">
              Blog
            </Link>
            <Nav.Link>toogle Theme</Nav.Link>
          </Nav>
          <Nav className="mt-2">
            <p className="text-white mt-1">{user?.displayName}</p>
            <Link className="mb-sm-3 mb-3  me-lg-3" to="/login">
              <Button variant="outline-primary">Login</Button>
            </Link>
            <Link to="/register">
              {/* <Button variant="outline-info">SignUp</Button> */}
              {user?.photoURL ? 
               <Image style={{height:'40px'}} roundedCircle src={user.photoURL}></Image>  
               :
               <FaUserAlt></FaUserAlt>
            }
            </Link>
          </Nav>
          <div className="d-lg-none py-3">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
