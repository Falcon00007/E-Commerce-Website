import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyNavbar from './navbar/MyNavbar'
import Main from './Body/Main'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
import About from './navbar/About';


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
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default ListItems