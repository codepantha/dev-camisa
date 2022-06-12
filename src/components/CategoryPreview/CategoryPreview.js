import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.styles.scss';
import ProductsContainer from '../../routes/Shop/Shop.styles';

const CategoryPreview = ({ title, products }) => (
  <div>
    <h2><Link to={`/shop/${title}`}>{title.toUpperCase()}</Link></h2>
    <ProductsContainer key={uuidv4()}>
      {products.slice(0, 4).map((product) => (
        <ProductCard key={uuidv4()} product={product} />
      ))}
    </ProductsContainer>
  </div>
);

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.instanceOf(Object).isRequired,
};

export default CategoryPreview;
