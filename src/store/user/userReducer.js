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
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_OUT_START:
      return { ...state, error: null, isLoading: true };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
