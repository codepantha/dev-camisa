import CATEGORY_ACTION_TYPES from './categoryTypes';

const initialState = {
  categoriesMap: {},
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

export default categoryReducer;
