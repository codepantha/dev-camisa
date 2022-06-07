import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './CartIcon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="shopping-icon"
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
