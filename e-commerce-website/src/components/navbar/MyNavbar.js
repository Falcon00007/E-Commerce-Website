import React from 'react'
import classes from "./Navbar.module.css";
//import { Container, Navbar,Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <header>
            <ul className={classes.header}>
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./store.html">STORE</a></li>
                <li><a href="./about.html">ABOUT</a></li>
                <li id='cart'><a href="#cart" className={classes.cart_holder}>cart</a><span className={classes.cart_number}>0</span>
                </li>
            </ul>
            <h1>The Generics</h1>
        </header>
  //   <>
  //   <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand="lg">
  //   <Container>
  //     <Nav className="me-auto justify-content-between" xs={3}>
  //       <Nav.Link href="#home">HOME</Nav.Link>
  //       <Nav.Link href="#store">STORE</Nav.Link>
  //       <Nav.Link href="#about">ABOUT</Nav.Link>
  //       <Nav.Link href="#cart">Cart<span><sup> 0</sup></span></Nav.Link>
  //     </Nav>
  //   </Container>
  // </Navbar>
  // </>
  )
}

export default MyNavbar;