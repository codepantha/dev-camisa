import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const addCartItem = (cartItems, product) => {
  const productExists = cartItems.find(
    (cartItem) => cartItem.id === product.id,
  );

  if (productExists) {
    return cartItems.map((item) => (item.id === product.id
      ? { ...item, quantity: item.quantity + 1 } : item));
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const reduceCartItemQuantity = (cartItems, product) => {
  // remove any cartItem if the quantity is just 1
  if (product.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) => {
    if (cartItem.name === product.name) {
      /* eslint-disable no-param-reassign */
      if (cartItem.quantity > 0) cartItem.quantity -= 1;
    }
    return cartItem;
  });
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  addItemToCart: () => [],
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, currentVal) => acc + currentVal.quantity,
      0,
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const decrementQuantity = (product) => {
    setCartItems(reduceCartItemQuantity(cartItems, product));
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    decrementQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
