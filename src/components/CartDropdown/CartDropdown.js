import React from 'react';
import Button from '../Button/Button';
import './CartDropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button type="button">CHECKOUT</Button>
  </div>
);

export default CartDropdown;
