import createAction from '../../utils/reducer/reducer.utils.';
import CATEGORY_ACTION_TYPES from './categoryTypes';

const setCategories = (categoriesArray) => (
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
);

export default setCategories;
