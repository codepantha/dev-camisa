import { createSelector } from 'reselect';

const cartItemsSubTotal = (cartItems) => (
  cartItems.reduce((acc, val) => acc + val.quantity * val.price, 0));

const selectCartReducer = (state) => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems,
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen,
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, currentVal) => acc + currentVal.quantity, 0),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItemsSubTotal(cartItems),
);
