import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import shopData from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
