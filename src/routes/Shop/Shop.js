import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsContext } from '../../contexts/products.context';
import './Shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={uuidv4()} product={product} />
      ))}
    </div>
  );
};

export default Shop;
