import { SET_BOOKS_LIST } from '../actions';
import booksList from '../docs/test-book';

export const initialState = {
  // Liste de tout les livres
  booksList: booksList,
  // // Liste des livres favoris
  // favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOKS_LIST:
      return {
        ...state,
        booksList: action.list,
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
