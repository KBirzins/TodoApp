import {createStore, combineReducers} from 'redux';

import todoListReducer from './todoList/reducers';

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
