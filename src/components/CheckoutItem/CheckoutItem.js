import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { decrementQuantity, addItemToCart, removeItem } from '../../store/cart/cartActions';
import './CheckoutItem.styles.scss';
import { selectCartItems } from '../../store/cart/cartSelector';

const CheckoutItem = ({ cartItem }) => {
  const {
    imageUrl, name, quantity, price,
  } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementQuantityHandler = () => dispatch(decrementQuantity(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItem(cartItems, cartItem));

  return (
    <>
      <tr className="checkout-item-container">
        <td className="image-container">
          <img src={imageUrl} alt={name} />
        </td>
        <td className="name">{name}</td>
        <td className="quantity">
          <button
            type="button"
            className="arrow"
            onClick={decrementQuantityHandler}
          >
            &#10094;
          </button>
          <span className="value">{quantity}</span>
          <button
            type="button"
            className="arrow"
            onClick={addItemToCartHandler}
          >
            &#10095;
          </button>
        </td>
        <td className="price">{price}</td>
        <td>
          <button className="remove-button" type="button" onClick={removeItemHandler}>
            &#10005;
          </button>
        </td>
      </tr>
    </>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CheckoutItem;
