import { SET_DISPLAY } from '../actions';

export const initialState = {
  categoriesList: [
    {
      id: 0,
      label: 'Aventure',
      image: 'http://monimage.jpg',
      slug: '/categorie/0',
    },
    {
      id: 1,
      label: 'Héroïc-Fantasy',
      image: 'http://monimage.jpg',
      slug: '/categorie/1',
    },
    {
      id: 2,
      label: 'Horreur',
      image: 'http://monimage.jpg',
      slug: '/categorie/2',
    },
    {
      id: 3,
      label: 'Enfant',
      image: 'http://monimage.jpg',
      slug: '/categorie/3',
    },
  ],
  connexionMenu: false,
  categoriesMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DISPLAY:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    default:
      return state;
  }
};

export default reducer;
