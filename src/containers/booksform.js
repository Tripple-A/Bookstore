import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATEBOOK } from '../actions';

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(CREATEBOOK(book)),
});

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleCategory(e) {
    this.setState({ category: e.target.value });
  }

  handleAddBook() {
    const { title, category } = this.state;
    const { addBook } = this.props;
    const book = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };
    if (title !== '' && category !== '') { addBook(book); this.setState({ title: '', category: '' }); }
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title } = this.state;
    const { category } = this.state;
    return (
      <div className="addForm">
        <div className="title">ADD NEW BOOK</div>
 <form>
        <label htmlFor="booktitle">
          {' '}
          
          <input placeholder="Book Title" className="Book-Title" type="text" name="booktitle" id="booktitle" value={title} onChange={this.handleChange} />
        </label>

        {' '}
        
        <label htmlFor="cat">
          {' '}
          
          <select placeholder="Category" className="Book-Category" name="cat" value={category} onChange={this.handleCategory}>
            <option className="cat" key='hey' value="">Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {' '}
                {cat}
                {' '}
              </option>
            ))}
          </select>
        </label>
        
        <button className="Add-Button" type="button" onClick={this.handleAddBook}>Add Book</button>
      </form>
      </div>
     
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
