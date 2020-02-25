import React, { Component } from 'react';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';


class App extends Component {
    render() {
        return (
            <div>
                <BooksList />
                <BooksForm />
            </div>
        )
    }
}

export default App;
