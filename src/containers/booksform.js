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
      id: 3,
      title,
      category,
    };
    addBook(book);
    this.setState({ title: '', category: '' });
  }

  render() {
    const categories = ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title } = this.state;
    const { category } = this.state;
    return (
      <form>
        <label htmlFor="booktitle">
          {' '}
          Book Title:
          <input type="text" name="booktitle" id="booktitle" value={title} onChange={this.handleChange} />
        </label>

        {' '}
        <br />
        <label htmlFor="cat">
          {' '}
          Category:
          <select name="cat" value={category} onChange={this.handleCategory}>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {' '}
                {cat}
                {' '}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="button" onClick={this.handleAddBook}>Add Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
