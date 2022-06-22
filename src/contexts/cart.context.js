import {
  createContext, useEffect, useReducer,
} from 'react';
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

const removeItemFromCart = (cartItems, product) => (
  cartItems.filter((cartItem) => cartItem.id !== product.id)
);

const cartItemCount = (cartItems) => cartItems.reduce(
  (acc, currentVal) => acc + currentVal.quantity,
  0,
);

const cartItemsSubTotal = (cartItems) => cartItems.reduce(
  (acc, val) => acc + val.quantity * val.price,
  0,
);

export const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  IS_CART_OPEN: 'IS_CART_OPEN',
  CART_COUNT: 'CART_COUNT',
  CART_SUB_TOTAL: 'CART_SUB_TOTAL',
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
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.DECREMENT_ITEM:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.CART_COUNT:
      return { ...state, cartCount: payload };
    case CART_ACTION_TYPES.CART_SUB_TOTAL:
      return { ...state, cartSubTotal: payload };
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

  useEffect(() => {
    dispatch({ type: CART_ACTION_TYPES.CART_COUNT, payload: cartItemCount(cartItems) });
    dispatch({ type: CART_ACTION_TYPES.CART_SUB_TOTAL, payload: cartItemsSubTotal(cartItems) });
  }, [cartItems]);

  const addItemToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: addCartItem(cartItems, product) });
  };

  const decrementQuantity = (product) => {
    dispatch({ type: CART_ACTION_TYPES.DECREMENT_ITEM, payload: reduceCartItemQuantity(cartItems, product) });
  };

  const removeItem = (product) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: removeItemFromCart(cartItems, product) });
  };

  const setIsCartOpen = () => dispatch({ type: CART_ACTION_TYPES.IS_CART_OPEN, payload: !isCartOpen });

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
