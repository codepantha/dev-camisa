import React from 'react';
import { PropTypes } from 'prop-types';

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h3>{name}</h3>
      <span>{quantity}</span>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
