import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_FILTER } from '../actions';

const categories = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const mapDispatchToProps = dispatch => ({
    handleFilterChange: e => dispatch(CHANGE_FILTER(e)),
})

const CategoryFilter = ({ handleFilterChange }) => (
    <div>
        <label htmlFor="cat">
          {' '}
          View Movies By Category:
          <select name="cat" onChange={e => handleFilterChange(e.target.value)}>
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

export default connect(null, mapDispatchToProps)(CategoryFilter);
