import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx= useContext(CartContext);
 
  const totalPrice= `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems= cartCtx.items.length>0;

  const cartRemoveItemHandler = (id)=>{
    cartCtx.removeItem(id);
  }
  const cartItemAddandler=(item)=>{
    cartCtx.addItem({...item});
  }

  const cartItems= (
    <ul>
    {cartCtx.map((product)=>(
        <CartItem key={product.id} imageUrl={product.imageUrl} title={product.tite} price={product.price}
        onRemove={cartRemoveItemHandler.bind(null, item.id)} onAdd={cartItemAddandler.bind(null, item)}/>
    ))}
    </ul>

  )

  return (
    <Modal onClose={props.onClose}>
    <h1>CART</h1>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;