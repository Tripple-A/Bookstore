import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK } from '../actions';

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => { dispatch(REMOVEBOOK(book)); },
});

const Book = ({ book, handleRemoveBook }) => (


  <tr>
    <td>
      {' '}
      {book.id}
      {' '}
    </td>
    <td>
      {' '}
      {book.title}
      {' '}
    </td>
    <td>
      {' '}
      {book.category}
      {' '}
    </td>
    <td>
      {' '}
      <button type="button" onClick={() => handleRemoveBook(book)}>REMOVE BOOK</button>
    </td>
  </tr>
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
