import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleCategory(e) {
    this.setState({ category: e.target.value });
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
        <button type="button">Add Book</button>
      </form>
    );
  }
}

export default BooksForm;
