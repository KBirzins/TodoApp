const initialTodos = [
  {text: 'First todo!', done: false, timestamp: 1579199193297},
];

function todoListReducer(state = initialTodos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          done: false,
          timestamp: new Date().getTime(),
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.timestamp === action.timestamp) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.timestamp === action.payload) {
          return {
            ...todo,
            text: action.text,
          };
        } else {
          return todo;
        }
      });

    case 'REMOVE_TODO':
      return state.filter(todo => {
        return todo.timestamp !== action.timestamp;
      });

    default:
      return state;
  }
}

export default todoListReducer;
