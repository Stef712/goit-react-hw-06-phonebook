import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelector';
import styles from './Filter.module.css';

function FilterInput() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Type to search"
      className={styles.input}
    />
  );
}

export default FilterInput;
