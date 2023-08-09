import React,{useContext, useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthContext from '../context/auth-context';
import MyNavbar from './navbar/MyNavbar'
import Main from './Body/Main'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
import About from './navbar/About';
import Home from './navbar/Home';
import ContactUs from './navbar/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';



const ListItems = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => { 
      setCartIsShown(false);
    };

  return (
    <Router>
    <MyNavbar onShowCart={showCartHandler}/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Footer/>
    </Router>
  )
}

export default ListItems