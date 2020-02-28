import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_FILTER } from '../actions';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const mapDispatchToProps = dispatch => ({
  handleFilterChange: e => dispatch(CHANGE_FILTER(e)),
});

const CategoryFilter = ({ handleFilterChange }) => (
  <div className="views">
    <label htmlFor="cat">
      {' '}
      Filter Available Views By Category:
      <select name="cat" className="filters" onChange={e => handleFilterChange(e.target.value)}>
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

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CategoryFilter);
