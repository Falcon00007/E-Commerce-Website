import React,{createContext,useState, useEffect} from 'react';
import axios from 'axios';

  const MyContext= createContext();

const AppContext = (props) => {
    
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

  const addItem = async (id)=>{
    try{
      const addedProduct = productList.find((product)=> product.id===id);
      const addedProductIndex= cart.find((product)=> product.id===id);
      if(addedProductIndex){
        alert("The item is already in the cart!!")
      }
      if(addedProduct && !addedProductIndex){  
        const userMail= localStorage.getItem('email');
        const response= await axios.post(`https://crudcrud.com/api/45995b8842594bf9af6d2d4f7d930606/cart${userMail}`, addedProduct)
        console.log(response.data);
        setCart((prevCart)=>[...prevCart, addedProduct]);
      }
    } catch(err){
      console.log("Product not added- " + err);
    }
  } 

  const removeItem = async (itemid, id)=>{
    try{
      setCart((prevCart)=> prevCart.filter((item)=>item.id!==itemid));
      const userMail= localStorage.getItem('email');
      const response = await axios.delete(`https://crudcrud.com/api/45995b8842594bf9af6d2d4f7d930606/cart${userMail}/${id}`)
      console.log(response.data);
    } catch(err){
      console.log("Item not removed- " + err);
    }     
        }

        useEffect(()=>{
          const fetchItems= async()=>{
            try{
              const userMail= localStorage.getItem('email');
             const response= await axios.get(`https://crudcrud.com/api/45995b8842594bf9af6d2d4f7d930606/cart${userMail}`);
            console.log(response);
            setCart(response.data);
            }catch(err){
              console.log("Fetch Items failed- " + err);
            }
          }
          fetchItems();
        },[])
       

  return (
    <MyContext.Provider value={{productList, cart, addItem, removeItem}}>{props.children}</MyContext.Provider>
  )
}

export {AppContext, MyContext}