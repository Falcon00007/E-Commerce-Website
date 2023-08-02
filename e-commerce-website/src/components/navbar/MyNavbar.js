import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";
//import CartContext from '../../context/cart-context';
//import { Container, Navbar,Nav } from 'react-bootstrap';
import { MyContext } from '../../context/AppContext';

const MyNavbar = (props) => {
  const cartCtx= useContext(MyContext);
  let {cart}=cartCtx;

  const numberOfCartItems=cart.length;

  return (
    <header>
            <ul className={classes.header}>
                <li><NavLink to="/" activeClassName={classes.active_link}>HOME</NavLink></li>
                <li><NavLink to="/" activeClassName={classes.active_link}>STORE</NavLink></li>
                <li><NavLink to="/about" activeClassName={classes.active_link}>ABOUT</NavLink></li>
                <button className={classes.cart_holder} id='cart' onClick={props.onShowCart}>cart</button>
                <span className={classes.cart_number}>{numberOfCartItems}</span>           
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