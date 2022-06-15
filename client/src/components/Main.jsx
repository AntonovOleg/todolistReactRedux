import React, { useEffect } from 'react';
import Todos from './Todos.jsx';
import InputFied from './InputField.jsx';
import './../styles/main.css';
import ItemCounter from './ItemCounter.jsx';
import Filters from './Filters.jsx';
import ControlBlock from './ControlBlock.jsx';
import Links from './Links.jsx';
import './../services/services.js';
import { useDispatch } from 'react-redux';
import { getItemsThunk } from '../redux-store/actions/actions.js';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsThunk());
  }, []);

  return (
    <div className='wrapper'>
      <div className='container'>
        <h2>Todo List</h2>
        <h4>Create task:</h4>
        <InputFied />
        <div>
          <h4>Tasks:</h4>
          <Todos />
        </div>
        <div className='footer'>
          <div>
            <ItemCounter />
          </div>
          <div>
            <ControlBlock />
          </div>
          <div className='filters-wrapper'>
            <span>Filters:</span>
            <Filters />
          </div>
          <div>
            <Links currentPage={'main'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
