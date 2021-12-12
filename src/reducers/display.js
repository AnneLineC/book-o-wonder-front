import { SET_CATEGORIES, SET_DISPLAY } from '../actions';

export const initialState = {
  categoriesList: [],
  connexionMenu: false,
  connectedMenu: false,
  categoriesMenu: false,
  mediaPlayer: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categoriesList: action.list,
      };
    case SET_DISPLAY:
      return {
        ...state,
        connexionMenu: false,
        connectedMenu: false,
        categoriesMenu: false,
        [action.name]: !state[action.name],
      };
    default:
      return state;
  }
};

export default reducer;
