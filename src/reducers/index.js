import { combineReducers } from 'redux';

import userReducer from './user';
import booksReducer from './books';
import displayReducer from './display';
import soundsReducer from './sounds';

const rootReducer = combineReducers({
  display: displayReducer,
  books: booksReducer,
  user: userReducer,
  sounds: soundsReducer,
});

export default rootReducer;
