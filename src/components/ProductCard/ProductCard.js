import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ProductCard.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addToCartHandler = () => {
    addItemToCart(product);
    console.log('added');
  };

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
