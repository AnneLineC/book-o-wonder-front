import {
  SET_CATEGORIES, SET_DISPLAY, SET_MEDIA_PLAYER_DISPLAY, SET_FORM_SENT_STATE, SET_FORM_ERROR_STATE,
} from '../actions';

export const initialState = {
  baseURI: 'http://54.88.115.5',
  categoriesList: [],
  connexionMenu: false,
  connectedMenu: false,
  categoriesMenu: false,
  mediaPlayer: false,
  mediaPlayerDisplay: {
    playing: false,
    volume: 0.8,
  },
  registerForm: {
    sent: false,
    error: false,
  },
  connexionForm: {
    sent: false,
    error: false,
  },
  changePasswordForm: {
    sent: false,
    error: false,
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
    case SET_FORM_SENT_STATE: {
      const newState = {
        ...state[action.formName],
        sent: action.sent,
      };
      return {
        ...state,
        [action.formName]: {
          ...newState,
        },
      };
    }
    case SET_FORM_ERROR_STATE: {
      const newState = {
        ...state[action.formName],
        error: action.error,
      };
      return {
        ...state,
        [action.formName]: {
          ...newState,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
