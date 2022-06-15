import React from 'react';
import './../styles/controlBlock.css';
import { useDispatch } from 'react-redux';
import {
  completeAllThunk,
  deleteAllThunk,
} from '../redux-store/actions/actions.js';

const ControlBlock = () => {
  const dispatch = useDispatch();

  const completeAll = () => {
    dispatch(completeAllThunk());
  };

  const deleteAll = () => {
    dispatch(deleteAllThunk());
  };

  return (
    <div className='control-block-wrapper'>
      <div onClick={completeAll}>CompleteAll</div>
      <div onClick={deleteAll}>DeleteAll</div>
    </div>
  );
};

export default ControlBlock;
