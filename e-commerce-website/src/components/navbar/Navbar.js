import React from 'react'
import classes from "./Navbar.module.css";

const Navbar = () => {
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
  )
}

export default Navbar