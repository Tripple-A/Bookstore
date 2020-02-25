import React, { Component } from 'react';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';
import { createStore } from 'redux';


class App extends Component {
    render() {
        return (
            <div>
                <BooksList />
               
            </div>
        )
    }
}

export default App;
