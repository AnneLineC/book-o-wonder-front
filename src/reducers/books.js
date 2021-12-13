import { SET_BOOKS_LIST_BY_CATEGORY, SET_BOOK } from '../actions';
import booksList from '../docs/test-book';

export const initialState = {
  booksList: booksList,
  categoryTitle: 0,
  book: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOKS_LIST_BY_CATEGORY:
      return {
        ...state,
        booksList: action.booksList,
      };
    case SET_BOOK:
      return {
        ...state,
        book: { ...action.data },
      };
    default:
      return state;
  }
};

export default reducer;
