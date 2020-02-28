import React from 'react';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';


const App = () => (
  <div>
    <header>
      <div className="Bookstore-CMS"> Bookstore CMS</div>
    <div className="BOOKS">BOOKS</div>
    <div className="CATEGORIES">CATEGORIES</div>
    <div className="Oval"><i className="fa fa-user"></i></div>
    </header>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
