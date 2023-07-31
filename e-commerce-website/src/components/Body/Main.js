import React from "react";
import "./Main.css";
import Items from "./Items";

const productsArr = [
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

const Main = (props) => {


let products=productsArr.map((product,index)=>(
  <Items id={product.id} title={product.title} imageUrl={product.imageUrl} price={product.price} index={index}/>
))

  return( 
  <>
    <section>
   <h2 className="heading">COLORS</h2>
    <div className="content-container">
    {products}
    </div>
    </section>
  </>
  )
};

export default Main;
