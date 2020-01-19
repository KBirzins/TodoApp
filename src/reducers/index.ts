import {createStore, combineReducers} from 'redux';

import todoListReducer from './todoList/reducers';
import filterReducer from './filter/reducers';

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filter: filterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
