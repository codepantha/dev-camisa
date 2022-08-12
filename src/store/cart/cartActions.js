/* eslint-disable no-unused-vars */
import createAction from '../../utils/reducer/reducer.utils.';
import CART_ACTION_TYPES from './cartTypes';

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

const cartItemCount = (cartItems) => cartItems.reduce((acc, currentVal) => acc + currentVal.quantity, 0);
const cartItemsSubTotal = (cartItems) => cartItems.reduce((acc, val) => acc + val.quantity * val.price, 0);

const updateCartItemsReducer = (newCartItems) => {
  const cartCount = cartItemCount(newCartItems);
  const cartSubTotal = cartItemsSubTotal(newCartItems);

  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
    cartCount,
    cartSubTotal,
  });
};

const removeItemFromCart = (cartItems, product) => cartItems.filter((cartItem) => cartItem.id !== product.id);

export const decrementQuantity = (cartItems, product) => {
  const newCartItems = reduceCartItemQuantity(cartItems, product);
  // updateCartItemsReducer(newCartItems);
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItem = (cartItems, product) => {
  const newCartItems = removeItemFromCart(cartItems, product);
  // updateCartItemsReducer(newCartItems);
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (bool) => (
  createAction(CART_ACTION_TYPES.IS_CART_OPEN, bool)
);
