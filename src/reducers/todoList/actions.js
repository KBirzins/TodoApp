const todoActions = {
  addTodo(text = '') {
    return {
      type: 'ADD_TODO',
      text,
    };
  },
  toggleTodo() {
    return {
      type: 'TOGGLE_TODO',
    };
  },
  editTodo(text) {
    return {
      type: 'EDIT_TODO',
      text,
    };
  },
  removeTodo() {
    return {
      type: 'REMOVE_TODO',
    };
  },
};

export default todoActions;
