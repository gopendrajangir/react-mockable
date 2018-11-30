import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllBooks } from './../actions/books';
import { fetchSingleBook } from './../actions/book';

class BooksList extends React.Component {

  constructor(props) {
    super(props);
    this.fetchBook = this.fetchBook.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchAllBooks();
  }
  
  fetchBook(bookId) {
    return () => {
      return this.props.fetchSingleBook(bookId)
    };
  }

  render() {
    return(
      <div className="books-list">
        {
          this.props.loading && <li className="fetch-message">Books are loading...</li>
        }
        {
          this.props.error != null && <li className="fetch-error">Could not fetch data</li>
        }
        {
          this.props.books.length > 0 && this.props.books.map((book) => {
            return (
              <li className="books-list-item" key={book.id} onClick={this.fetchBook(book.id)}><h3>{book.title}</h3><h4>{book.author}</h4></li>
              )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading,
    error: state.books.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAllBooks,
    fetchSingleBook
  }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);