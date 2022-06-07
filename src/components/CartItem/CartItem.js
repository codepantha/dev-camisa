import React from 'react';
import { PropTypes } from 'prop-types';
import './CartItem.styles.scss';

const CartItem = ({ cartItem }) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`${quantity} x ${price}`}</span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
