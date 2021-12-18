import { SET_SOUNDS, SET_CURRENT_SOUND } from "../actions";

export const initialState = {
  musicsList: [],
  currentMusic: {
    id: 1,
    name: 'Lofi',
    music: 'https:/www.youtube.com/watch?v=5qap5aO4i9A',
    image: null,
    categories: [
      {
        id: 1,
        name: 'Fantasy',
      },
    ],
  },
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
