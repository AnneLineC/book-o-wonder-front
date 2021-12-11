import { combineReducers } from 'redux';

import userReducer from './user';
import booksReducer from './books';
import displayReducer from './display';

const rootReducer = combineReducers({
  display: displayReducer,
  books: booksReducer,
  user: userReducer,
});

export default rootReducer;
