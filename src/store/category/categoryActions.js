import createAction from '../../utils/reducer/reducer.utils.';
import CATEGORY_ACTION_TYPES from './categoryTypes';

const setCategoriesMap = (categoriesMap) => (
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
);

export default setCategoriesMap;
