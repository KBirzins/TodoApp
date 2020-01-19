const todoActions = {
  addTodo(text = '') {
    return {
      type: 'ADD_TODO',
      text,
    };
  },
  toggleTodo(timestamp) {
    return {
      type: 'TOGGLE_TODO',
      timestamp,
    };
  },
  editTodo(text, timestamp) {
    return {
      type: 'EDIT_TODO',
      text,
      timestamp,
    };
  },
  removeTodo(timestamp) {
    return {
      type: 'REMOVE_TODO',
      timestamp,
    };
  },
};

export default todoActions;
