import {
  SET_CATEGORIES,
  SET_DISPLAY,
  SET_MEDIA_PLAYER_DISPLAY,
  SET_FORM_SENT_STATE,
  SET_FORM_ERROR_STATE,
  SET_BOOK_READING_PAGE_DISPLAY,
  SET_ELEMENT_IS_LOADED,
  RESET_ALL_ERRORS,
} from '../actions';

export const initialState = {
  baseURI: 'http://localhost:8080',
  categoriesList: [],
  connexionMenu: false,
  connectedMenu: false,
  categoriesMenu: false,
  mediaPlayer: false,
  loaded: {
    highlightedBooks: false,
    musicsList: false,
    currentMusic: false,
    mostPinnedBook: false,
    mostReadCategory: false,
    currentBook: false,
  },
  mediaPlayerDisplay: {
    playing: false,
    volume: 0.8,
  },
  bookReadingPageDisplay: {
    fontSize: 100,
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

    case SET_BOOK_READING_PAGE_DISPLAY:
      return {
        ...state,
        bookReadingPageDisplay: {
          ...state.bookReadingPageDisplay,
          [action.property]: action.value,
        },
      };

    case SET_ELEMENT_IS_LOADED:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          [action.element]: action.value,
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

    case RESET_ALL_ERRORS: {
      return {
        ...state,
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
    }
    default:
      return state;
  }
};

export default reducer;
