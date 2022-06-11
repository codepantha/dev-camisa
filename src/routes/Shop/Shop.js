import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/categories.context';
import './Shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <>
          <h2>{title}</h2>
          <div key={uuidv4()} className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={uuidv4()} product={product} />
            ))}
          </div>
        </>
      ))}
      ;
    </>
  );
};

export default Shop;
