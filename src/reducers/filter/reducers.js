const initialFilter = {
  todo: {
    isActive: false,
    isPrimaryActive: true,
  },
  date: {
    isActive: false,
    isPrimaryActive: true,
  },
  alphabet: {
    isActive: false,
    isPrimaryActive: true,
  },
  text: '',
};

function filterReducer(state = initialFilter, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...action.filter,
      };

    default:
      return state;
  }
}

export default filterReducer;
