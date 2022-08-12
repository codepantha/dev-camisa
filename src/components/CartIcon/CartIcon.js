import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartActions';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cartSelector';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleCartDropdown} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
