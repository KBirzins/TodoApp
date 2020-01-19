const filterActions = {
  setFilter(filter) {
    return {
      type: 'SET_FILTER',
      filter,
    };
  },
};

export default filterActions;
