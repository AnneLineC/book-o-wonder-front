import { SET_DISPLAY, REMOVE_ALL_DISPLAY } from '../actions';

export const initialState = {
  categoriesList: [
    {
      id: 0,
      label: 'Aventure',
      image: 'http://monimage.jpg',
    },
    {
      id: 1,
      label: 'Héroïc-Fantasy',
      image: 'http://monimage.jpg',
    },
    {
      id: 2,
      label: 'Horreur',
      image: 'http://monimage.jpg',
    },
    {
      id: 3,
      label: 'Enfant',
      image: 'http://monimage.jpg',
    },
  ],
  connexionMenu: false,
  connectedMenu: false,
  categoriesMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
