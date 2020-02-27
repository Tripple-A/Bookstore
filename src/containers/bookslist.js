import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/category_filter';

const mapStateToProps = state => ({ books: state.books });

const BooksList = ({ books }) => (
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
        {books.map(b => <Book key={b.id} book={b} />)}
      </tbody>

    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
