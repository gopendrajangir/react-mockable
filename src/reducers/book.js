import { FETCH_BOOK } from './../actions/book';
import { FETCH_BOOK_SUCCESS } from './../actions/book';
import { FETCH_BOOK_FAILED } from './../actions/book';

const initialState = {
  loading: false,
  data: null,
  error: null
}

export default (state = initialState, action) => {
switch(action.type) {
    case FETCH_BOOK:
      return {
        loading: true,
        data: null,
        error: null
      };
    case FETCH_BOOK_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case FETCH_BOOK_FAILED:
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}