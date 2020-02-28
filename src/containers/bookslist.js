import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/category_filter';

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const showbooks = (books, filter) => {
  if (filter !== 'All') {
    return books.filter(b => b.category === filter);
  }
  return books;
};

const BooksList = ({ books, filter }) => (
  <div>
    <CategoryFilter />
    <table>
      <thead>
        <tr>
          <th> BOOK ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
          <th>DELETE BOOK</th>
        </tr>
      </thead>
      <tbody>
        {showbooks(books, filter).map(b => <Book key={b.title} book={b} />)}
      </tbody>

    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
