import React from 'react'

const CartItem = () => {
  return (
    <>
    <div>
    <h1>ITEM</h1>
    <h1>PRICE</h1>
    <h1>QUANTITY</h1>
    </div>
    <li>
    <div className='image'><img src={props.imageUrl}/></div>
    <h3 className='title'>{props.title}</h3>
    <h2 className='price'>{props.price}</h2>
    <span className='quantity'>1</span>
    <button className='removeBtn'>REMOVE</button>
    </li>
  </>
  )
}

export default CartItem