import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ setNewFilter }) => {
  return (
    <div className={css.filterContainer}>
      <input className={css.inputFind} type="text" onInput={setNewFilter} />
      <span className={css.textFind}>Find contacts by name</span>
    </div>
  );
};

Filter.propTypes = {
  setNewFilter: PropTypes.func.isRequired,
};

export default Filter;
