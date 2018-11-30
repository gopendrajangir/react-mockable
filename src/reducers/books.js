import { FETCH_BOOKS } from './../actions/books';
import { FETCH_BOOKS_SUCCESS } from './../actions/books';
import { FETCH_BOOKS_FAILED } from './../actions/books';

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BOOKS:
      return {
        loading: true,
        error: null,
        data: []
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.data
      };
    case FETCH_BOOKS_FAILED:
      return {
        loading: false,
        error: action.error,
        data: []
      };
    default:
      return state;
  }
}
