import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  img1 from '../Navbar/Снимок_экрана_2022-12-13_150527-removebg-preview.png'



function NavbarCustom({ darkState,lightState}) {
    // console.log(state)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Navbar.Brand href="/"> <img src={img1} width="80px" height='70px' alt=""></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link style={{color: 'white',textDecoration: "none", marginRight: "20px", marginTop: "8px"}} to="/">
          Главная
            </Link>
            <Link style={{color: 'white',textDecoration: "none", marginRight: "5px", marginTop: "8px"}} to="/information">
          Информация
            </Link>
          </Nav>
          <Nav>
            <a  onClick={()=>
             darkState() 
            } style={{marginRight: '20px', textDecoration: 'none', color: 'white'}} href="#">Dark</a>
            <a onClick={()=>lightState()} style={{textDecoration: 'none', color: 'white'}} href="#">Light</a>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;