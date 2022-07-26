import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import categoryReducer from './category/categoryReducer';

const rootReducer = combineReducers({
  userReducer,
  categoryReducer,
});

export default rootReducer;
