import React,{createContext,useState, useContext} from 'react';
import AuthContext from './auth-context';
import axios from 'axios';

  const MyContext= createContext();

const AppContext = (props) => {
  const userMail= useContext(AuthContext).userEmail;

  const productList=[
    {
        id:"album1",
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },
      {
        id:"album2",
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
      {
        id:"album3",
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
      {
        id:"album4",
        title: "Blue Color",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    ];
  
  const [cart, setCart] = useState([]);

  const addItem = (id)=>{
    const addedProduct = productList.find((product)=> product.id===id);
    const addedProductIndex= cart.find((product)=> product.id===id);
    if(addedProductIndex){
      alert("The item is already in the cart!!")
    }
    if(addedProduct && !addedProductIndex){
      setCart((prevCart)=>[...prevCart, addedProduct])
      axios.post(`https://crudcrud.com/api/0fa299e1c82b4ac3b1a75397140a9e11/cart${userMail}/${id}`, addedProduct)
      .then(()=>{
        console.log("Item added to cart for " + userMail)
      })
    }
  }

  const removeItem = (id)=>{
          setCart((prevCart)=> prevCart.filter((item)=>item.id!==id))
          axios.delete(`https://crudcrud.com/api/0fa299e1c82b4ac3b1a75397140a9e11/cart${userMail}/${id}`)
        }

  return (
    <MyContext.Provider value={{productList, cart, addItem, removeItem}}>{props.children}</MyContext.Provider>
  )
}

export {AppContext, MyContext}