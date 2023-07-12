import React from 'react';
import css from './Filter.module.css';

const Filter = ({ setNewFilter }) => {
  return (
    <div className={css.filterContainer}>
      <input className={css.inputFind} type="text" onInput={setNewFilter} />
      <span className={css.textFind}>Find contacts by name</span>
    </div>
  );
};

export default Filter;
