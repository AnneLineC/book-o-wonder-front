import { combineReducers } from 'redux';

import userReducer from './user';
import booksReducer from './books';

const rootReducer = combineReducers({
  books: booksReducer,
  user: userReducer,
});

export default rootReducer;