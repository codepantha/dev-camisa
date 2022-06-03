import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const addCartItem = (cartItems, product) => {
  const productExists = cartItems.find(
    (cartItem) => cartItem.id === product.id,
  );

  if (productExists) {
    return cartItems.map((item) => (
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  addItemToCart: () => [],
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
