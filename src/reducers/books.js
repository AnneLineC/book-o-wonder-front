import { SET_BOOKS_LIST_BY_CATEGORY } from '../actions';
import booksList from '../docs/test-book';

export const initialState = {
  booksList: booksList,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOKS_LIST_BY_CATEGORY:
      return {
        ...state,
        booksList: action.booksList,
      };
    default:
      return state;
  }
};

export default reducer;
