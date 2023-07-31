import React from "react";
import "./Main.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

let products=productsArr.map((product,index)=>{
    return (
        <div className="content" key={"album"+index+1}>
        <div className="container" >
          <h3>{product.title}</h3>
          <div className="image-container">
            <img className="prod-images" src={product.imageUrl} alt="alb1" />
          </div>
          <div className="prod-details">
            <span>
              $<span>{product.price}</span>
            </span>
            <button className="shop-item-button" type="button">
              ADD TO CART
            </button>
           </div>
          </div>
        </div>
    )
})

const Main = () => {
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
