import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';


const mapStateToProps = state => ({ books: state.BookReducer });

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th> BOOK ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        {books.map(b => <Book key={b.id} book={b} />)}
      </tbody>

    </table>
  </div>
);


export default connect(mapStateToProps, null)(BooksList);
