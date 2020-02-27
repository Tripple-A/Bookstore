import React from 'react';

const categories = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => (
    <div>
        <label htmlFor="cat">
          {' '}
          View Movies By Category:
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
    </div>
);

export default CategoryFilter;
