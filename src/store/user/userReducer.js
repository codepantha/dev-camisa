import USER_ACTION_TYPES from './userTypes';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
