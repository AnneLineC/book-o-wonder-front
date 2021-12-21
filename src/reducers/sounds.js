import { SET_SOUNDS, SET_CURRENT_SOUND } from '../actions';

export const initialState = {
  musicsList: [],
  musicsListIsLoaded: false,
  currentMusic: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SOUNDS:
      return {
        ...state,
        musicsList: action.data,
      };

    case SET_CURRENT_SOUND:
      return {
        ...state,
        currentMusic: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
