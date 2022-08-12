import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import categoryReducer from './category/categoryReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
  userReducer,
  categoryReducer,
  cartReducer,
});

export default rootReducer;
