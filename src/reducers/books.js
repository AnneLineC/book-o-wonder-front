import { SET_BOOKS_LIST_BY_CATEGORY } from '../actions';
import booksList from '../docs/test-book';

export const initialState = {
  // Liste de tout les livres
  booksList: booksList,
  categoryTitle: 0,
  // // Liste des livres favoris
  // favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOKS_LIST_BY_CATEGORY:
      return {
        ...state,
        booksList: action.booksList,
        // categoryTitle: action.categoryTitle,
      };
    // case SAVE_BOOKS:
    //   return {
    //     ...state,
    //     list: action.list,
    //     loading: false,
    //   };
    // case SAVE_FAVORITES:
    //   return {
    //     ...state,
    //     favorites: action.favorites,
    //   };
    default:
      return state;
  }
};

export default reducer;
