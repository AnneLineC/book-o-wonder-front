import { SET_BOOKS_LIST_BY_CATEGORY, SET_BOOK } from '../actions';

export const initialState = {
  categoryTitle: 0,
  book: {},
  books: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOKS_LIST_BY_CATEGORY:
      return {
        ...state,
        ...action.data,
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
