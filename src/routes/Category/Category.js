import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard/ProductCard';
import ProductsContainer from '../Shop/Shop.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap: { [category]: products } } = useSelector((state) => state.categoryReducer);
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{category.toUpperCase()}</h2>
      <ProductsContainer>
        {products?.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default Category;
