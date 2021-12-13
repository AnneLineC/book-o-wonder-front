import { SET_CATEGORIES, SET_DISPLAY, SET_MEDIA_PLAYER_DISPLAY } from '../actions';

export const initialState = {
  categoriesList: [],
  connexionMenu: false,
  connectedMenu: false,
  categoriesMenu: false,
  mediaPlayer: false,
  mediaPlayerDisplay: {
    playing: false,
    volume: 0.8,
  },
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
    case SET_MEDIA_PLAYER_DISPLAY:
      return {
        ...state,
        mediaPlayerDisplay: {
          ...state.mediaPlayerDisplay,
          [action.property]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
