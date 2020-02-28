import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK } from '../actions';

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => { dispatch(REMOVEBOOK(book)); },
});

const Book = ({ book, handleRemoveBook }) => (

<div className="book">
  <div>
  <div className="bookCat">{book.category}</div>
<div className="bookName">{book.title}</div>
<div className="bookAuthor">{book.author} </div>
  </div>

<button className="removeBook" type="button" onClick={() => handleRemoveBook(book)}>REMOVE BOOK</button>
</div>
 
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Book);
