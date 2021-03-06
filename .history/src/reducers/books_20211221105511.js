import {
  SET_BOOKS_LIST_BY_CATEGORY,
  SET_BOOK,
  SET_HIGHLIGHTED_BOOKS,
  SET_MOST_PINNED_BOOK,
  SET_MOST_READ_CATEGORY,
  SET_HIGHLIGHTED_BOOKS_ARE_LOADED,
} from '../actions';

export const initialState = {
  categoryTitle: 0,
  book: {},
  books: [],
  highlightedBooks: [],
  highlightedBooksAreLoaded: false,
  mostPinnedBook: {},
  mostReadCategory: {},
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

    case SET_HIGHLIGHTED_BOOKS:
      return {
        ...state,
        highlightedBooks: action.data,
      };
      
    case SET_MOST_PINNED_BOOK:
      return {
        ...state,
        mostPinnedBook: action.data,
      };
    case SET_MOST_READ_CATEGORY:
      return {
        ...state,
        mostReadCategory: action.data,
      };
    case SET_HIGHLIGHTED_BOOKS_ARE_LOADED:
      return {
        ...state,
        highlightedBooksAreLoaded: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
