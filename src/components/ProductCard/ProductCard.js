import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import './ProductCard.styles.scss';
import { addItemToCart } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelector';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addToCartHandler = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        type="button"
        buttonType="inverted"
        handleButtonClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductCard;
