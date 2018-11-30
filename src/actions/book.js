export const FETCH_BOOK = "FETCH_BOOK";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";
export const FETCH_BOOK_FAILED = "FETCH_BOOK_FAILED";

export function fetchBook() {
  return {
    type: FETCH_BOOK
  }
}

export function fetchBookSuccess(data) {
  return {
    type: FETCH_BOOK_SUCCESS,
    data
  }
}

export function fetchBookFailed(error) {
  return {
    type: FETCH_BOOK_FAILED,
    error
  }
}

export function fetchSingleBook(bookId) {
  const url = `http://demo4344141.mockable.io/books/${bookId}`;
  return (dispatch) => {
    dispatch(fetchBook());
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dispatch(fetchBookSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchBookFailed(error));
    })
  }
}