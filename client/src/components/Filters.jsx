import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterAll,
  filterActive,
  filterCompleted,
} from '../redux-store/actions/actions.js';
import './../styles/filters.css';

const Filters = () => {
  const filterMode = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  return (
    <div className='filter-wrapper'>
      <div
        className={filterMode === 'All' ? 'selected' : 'unselected'}
        onClick={() => dispatch(filterAll())}
      >
        All
      </div>
      <div
        className={filterMode === 'Active' ? 'selected' : 'unselected'}
        onClick={() => dispatch(filterActive())}
      >
        Active
      </div>
      <div
        className={filterMode === 'Completed' ? 'selected' : 'unselected'}
        onClick={() => dispatch(filterCompleted())}
      >
        Completed
      </div>
    </div>
  );
};

export default Filters;
