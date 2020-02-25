import React, { Component } from 'react';

class BooksForm extends Component {
    render() {
        const categories =  ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
        
        return (
            <form>
                <label for="booktitle"> Book Title: </label>
                <input type="text" name="booktitle"></input> <br>
                </br>
                <label for="cat"> Category: </label>
                <select name="cat" >
        {categories.map(cat => <option value={cat} > {cat} </option>)}
                </select>
                <br></br>
                <button type="button">Add Book</button>
            </form>
        )
    }
}

export default BooksForm;
