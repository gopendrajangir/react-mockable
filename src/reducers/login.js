import { LOGIN } from './../actions/login';
import { LOGIN_SUCCESS } from './../actions/login';
import { LOGIN_FAILED } from './../actions/login';

const initialState = {
  requesting: false,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        loading: true,
        error: null,
        data: null
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.data
      };
    case LOGIN_FAILED:
      return {
        loading: false,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
}
