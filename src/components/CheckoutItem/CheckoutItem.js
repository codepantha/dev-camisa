import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './CheckoutItem.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const {
    imageUrl, name, quantity, price,
  } = cartItem;

  const { addItemToCart, decrementQuantity, removeItem } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const decrementQuantityHandler = () => decrementQuantity(cartItem);
  const removeItemHandler = () => removeItem(cartItem);

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
