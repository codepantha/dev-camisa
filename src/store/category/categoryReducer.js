import CATEGORY_ACTION_TYPES from './categoryTypes';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export default categoryReducer;
