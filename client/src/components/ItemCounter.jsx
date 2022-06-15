import React from 'react';
import { useSelector } from 'react-redux';
import './../styles/itemCounter.css';

const ItemCounter = () => {
  const itemsLeft = useSelector(
    (state) => state.todoReducer.activeTodos
  ).length;

  return (
    <div className='item-counter-wrapper'>{itemsLeft} active tasks left</div>
  );
};

export default ItemCounter;
