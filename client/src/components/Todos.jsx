import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo.jsx';
import './../styles/todos.css';

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const filterMode = useSelector((state) => state.filterReducer);
  const activeTodos = useSelector((state) => state.todoReducer.activeTodos);
  const completedTodos = useSelector(
    (state) => state.todoReducer.completedTodos
  );

  let renderTodos;
  switch (filterMode) {
    case 'All':
      renderTodos = todos;
      break;
    case 'Active':
      renderTodos = activeTodos;
      break;
    case 'Completed':
      renderTodos = completedTodos;
      break;
    default:
      alert('Ошибка в выборе фильтра');
      break;
  }

  return renderTodos.map((curr) => {
    return (
      <div key={curr.id} className='todo-wrapper'>
        <Todo
          id={curr._id}
          text={curr.todo}
          flag={curr.isDone}
        />
      </div>
    );
  });
};

export default Todos;
