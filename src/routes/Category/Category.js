import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap: { [category]: products } } = useContext(CategoriesContext);
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{category.toUpperCase()}</h2>
      <div className="products-container">
        {products?.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
