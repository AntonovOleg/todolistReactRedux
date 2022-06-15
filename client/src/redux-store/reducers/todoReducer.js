const defaultState = {
  todos: [],
  activeTodos: [],
  completedTodos: [],
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'Create':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'Delete':
      return {
        ...state,
        todos: [...state.todos.filter((curr) => curr.id !== action.payload)],
      };
    case 'GetItems':
      return {
        ...state,
        todos: action.payload ? action.payload : [],
        activeTodos: action.payload
          ? action.payload.filter((curr) => !curr.isDone)
          : [],
        completedTodos: action.payload
          ? action.payload.filter((curr) => curr.isDone)
          : [],
      };
    case 'Modify':
      return {
        ...state,
        todos: state.todos.map((curr) => {
          if (curr.id === action.payload.id) {
            curr.text = action.payload.text;
            curr.flag = action.payload.flag;
          }
          return curr;
        }),
      };
    default:
      return state;
  }
};
