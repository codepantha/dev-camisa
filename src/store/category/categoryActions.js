import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import createAction from '../../utils/reducer/reducer.utils.';
import CATEGORY_ACTION_TYPES from './categoryTypes';

const fetchCategoriesRequest = () => (
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_REQUEST)
);

const fetchCategoriesSuccess = (categoriesArray) => (
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

const fetchCategoriesFailed = (error) => (
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (err) {
    dispatch(fetchCategoriesFailed(err));
  }
};
