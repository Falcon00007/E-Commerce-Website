import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyNavbar from './navbar/MyNavbar'
import Main from './Body/Main'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
import About from './navbar/About';
import Home from './navbar/Home';
import ContactUs from './navbar/ContactUs';


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
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    </Routes>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Footer/>
    </Router>
  )
}

export default ListItems