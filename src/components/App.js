import React, { PureComponent, Component } from 'react';

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