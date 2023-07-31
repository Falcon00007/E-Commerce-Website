import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'

const Items = (props) => {
    const cartCtx= useContext(CartContext);

    const onClickHandler=()=>{
        cartCtx.addItem({
            id:props.id,
            title:props.title,
            url:props.imageUrl,
            price:props.price.toFixed(2)
        })
    }


  return (
    <div className="content" key={props.id}>
        <div className="container" >
          <h3>{props.title}</h3>
          <div className="image-container">
            <img className="prod-images" src={props.imageUrl} alt={"alb"+props.index+1} />
          </div>
          <div className="prod-details">
            <span>
              $<span>{props.price}</span>
            </span>
            <button className="shop-item-button" type="button" onClick={onClickHandler}>
              ADD TO CART
            </button>
           </div>
          </div>
        </div>
  )
}

export default Items