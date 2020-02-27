import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <label htmlFor="booktitle">
        {' '}
        Book Title:
        <input type="text" name="booktitle" id="booktitle" />
      </label>

      {' '}
      <br />
      <label htmlFor="cat">
        {' '}
        Category:
        <select name="cat">
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
};

export default BooksForm;
