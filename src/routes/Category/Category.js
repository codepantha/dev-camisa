import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard/ProductCard';
import ProductsContainer from '../Shop/Shop.styles';
import selectCategoriesMap from '../../store/category/categorySelector';

const Category = () => {
  const { category } = useParams();
  // destructure and get the products
  const { [category]: products } = useSelector(selectCategoriesMap);

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
