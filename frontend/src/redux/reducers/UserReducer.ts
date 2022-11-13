import * as actionType from "../actionType";

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: null,
  token: null,
  isAuthenticated: false,
  message: "",
};

export const UserReducer = (state = initialState, action: any) => {
  let newState: any;
  switch (action.type) {
    case actionType.REGISTER_USER_SUCCESS:
      newState = {
        ...state,
      };
      return newState;

    default:
      return state;
  }
};
