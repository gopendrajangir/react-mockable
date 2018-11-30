import React from 'react';
import { connect } from 'react-redux';

class BooksView extends React.Component {
  render() {
    return (
      <div className="books-view">
        {
          this.props.loading && <li className="fetch-message">Book details are loading...</li>
        }
        {
          this.props.error != null && <li classname="fetch-error">Could not fetch data</li>
        }
        {
          this.props.book && 
              <ul className="book-detail">
                <h2>{this.props.book.title}</h2>
                <h2>{this.props.book.author}</h2>
                <h4>Pages - {this.props.book.totalPages}</h4>
                <h4>Edition - {this.props.book.edition}</h4>
                <h4>Year - {this.props.book.year}</h4>
              </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.currentBook.data,
    loading: state.currentBook.loading,
    error: state.currentBook.error
  }
}

export default connect(mapStateToProps, null)(BooksView);