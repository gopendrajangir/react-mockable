export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILED = "FETCH_BOOKS_FAILED";

export function fetchBooks() {
  return {
    type: FETCH_BOOKS
  }
}

export function fetchBooksSuccess(data) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    data
  }
}

export function fetchBooksFailed(error) {
  return {
    type: FETCH_BOOKS_FAILED,
    error
  }
}

const url = `http://demo4344141.mockable.io/books`;

export function fetchAllBooks() {
  return (dispatch) => {
    dispatch(fetchBooks());
    fetch(url)
    .then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(fetchBooksSuccess(data.books));
    }).catch((error) => {
      dispatch(fetchBooksFailed(error));
    })
  }
}