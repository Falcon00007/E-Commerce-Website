import React,{useState} from 'react'
import MyNavbar from './navbar/MyNavbar'
import Main from './Body/Main'
import Footer from './footer/Footer'
import Cart from './cart/Cart'


const ListItems = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };

  return (
    <>
    <MyNavbar onShowCart={showCartHandler}/>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Main/>
    <Footer/>
    </>
  )
}

export default ListItems