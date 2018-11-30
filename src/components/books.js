import React from 'react';
import Books from './../containers/booksList';
import BooksView from './../containers/booksView';

export default (props) => {
  return(
    <div className="books-container">
      <Books />
      <BooksView />
    </div>
  );
}