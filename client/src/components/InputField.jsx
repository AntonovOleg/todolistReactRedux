import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItemThunk } from '../redux-store/actions/actions.js';
import './../styles/inputField.css';

const InputFied = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const createItem = (text) => {
    dispatch(createItemThunk(text));
    setText('');
  };

  const btnClick = () => {
    text ? createItem(text) : alert('empty');
  };

  return (
    <div className='input-field-wrapper'>
      <input
        onKeyDown={(e) => (e.keyCode === 13 ? btnClick() : null)}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter the task here...'
      />
      <span className='btn-create' onClick={btnClick}>
        Create
      </span>
    </div>
  );
};

export default InputFied;
