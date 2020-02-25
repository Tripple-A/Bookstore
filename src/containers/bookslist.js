import React, { Component } from 'react';
import Book from '../components/Book'

class BooksList extends Component {
    render() {
        const book =[{id: '1', title:'hey', category:'scifi'}]
    
        return (
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
    { book.map(b => <Book {...b} />) } 
  </tbody>
                
                </table>
            </div>
        )
    }
}

export default BooksList;
