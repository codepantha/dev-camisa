import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={() => setIsCartOpen(!isCartOpen)} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
