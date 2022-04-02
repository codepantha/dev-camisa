import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" buttonType="inverted">Add to cart</Button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductCard;
