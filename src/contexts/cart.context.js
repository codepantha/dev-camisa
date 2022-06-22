import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const addCartItem = (cartItems, product) => {
  const productExists = cartItems.find(
    (cartItem) => cartItem.id === product.id,
  );

  if (productExists) {
    /* eslint-disable max-len */
    return cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
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

const removeItemFromCart = (cartItems, product) => cartItems.filter((cartItem) => cartItem.id !== product.id);

const cartItemCount = (cartItems) => cartItems.reduce((acc, currentVal) => acc + currentVal.quantity, 0);

const cartItemsSubTotal = (cartItems) => cartItems.reduce((acc, val) => acc + val.quantity * val.price, 0);

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  IS_CART_OPEN: 'IS_CART_OPEN',
};

const initialState = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartSubTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  addItemToCart: () => [],
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const {
    cartItems, isCartOpen, cartCount, cartSubTotal,
  } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const cartCount = cartItemCount(newCartItems);
    const cartSubTotal = cartItemsSubTotal(newCartItems);

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: { cartItems: newCartItems, cartCount, cartSubTotal },
    });
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const decrementQuantity = (product) => {
    const newCartItems = reduceCartItemQuantity(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItem = (product) => {
    const newCartItems = removeItemFromCart(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => dispatch({ type: CART_ACTION_TYPES.IS_CART_OPEN, payload: bool });

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartSubTotal,
    decrementQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
