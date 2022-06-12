import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductsContainer from '../Shop/Shop.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap: { [category]: products } } = useContext(CategoriesContext);
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
