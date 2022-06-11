import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div>
    <h2><Link to={`/shop/${title}`}>{title.toUpperCase()}</Link></h2>
    <div key={uuidv4()} className="products-container">
      {products.slice(0, 4).map((product) => (
        <ProductCard key={uuidv4()} product={product} />
      ))}
    </div>
  </div>
);

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.instanceOf(Object).isRequired,
};

export default CategoryPreview;
