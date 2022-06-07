import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button type="button"><Link to="/checkout">CHECKOUT</Link></Button>
    </div>
  );
};

export default CartDropdown;
