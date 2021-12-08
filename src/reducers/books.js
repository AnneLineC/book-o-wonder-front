import { SAVE_BOOKS, SAVE_FAVORITES } from '../test-book.json';

export const initialState = {
  // ex: list: null,

  // Liste de tout les livres
  listBook: './../test-book.json',
  // Liste des livres favoris
  favorites: [],
  // Chargement des données en cours
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOKS:
      return {
        ...state,
        list: action.list,
        loading: false,
      };
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
};

export default reducer;
