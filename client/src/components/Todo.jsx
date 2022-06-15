import { useDispatch } from 'react-redux';
import React from 'react';
import {
  changeFlag,
  changeText,
  deleteItem,
} from '../redux-store/actions/actions';
import './../styles/todo.css';
import { useState } from 'react';

const Todo = (props) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [editText, setEditText] = useState('');
  const { id, text, flag } = props;

  const elemText = (
    <span
      onDoubleClick={() => {
        setEditText(text);
        return setEditable(!editable);
      }}
      className={flag ? 'strike' : 'normal'}
    >
      {text}
    </span>
  );

  const dbClick = () => {
    dispatch(changeText(id, editText, flag));
    setEditable(!editable);
  };

  const elemEdit = (
    <input
      type='text'
      onDoubleClick={() => dbClick()}
      className={flag ? 'strike' : 'normal' + ' edit'}
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onKeyDown={(e) => (e.keyCode === 13 ? dbClick() : null)}
    />
  );

  return (
    <div className='todo'>
      <input
        type='checkbox'
        checked={flag}
        onChange={() => dispatch(changeFlag(id, text, flag))}
      />
      {editable ? elemEdit : elemText}
      <div
        className='delete-button'
        onClick={() => dispatch(deleteItem(id))}
      >
        X
      </div>
    </div>
  );
};

export default Todo;
