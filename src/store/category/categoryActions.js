import createAction from '../../utils/reducer/reducer.utils.';
import CATEGORY_ACTION_TYPES from './categoryTypes';

export const fetchCategoriesRequest = () => (
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_REQUEST)
);

export const fetchCategoriesSuccess = (categoriesArray) => (
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = (error) => (
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
