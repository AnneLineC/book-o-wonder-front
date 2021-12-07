import {
  SET_FIELD_VALUE,
} from '../actions';

export const initialState = {
  currentUser: null,
  nicknameValue: '',
  emailValue: '',
  passwordValue: '',
  passwordConfirmValue: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
        // emailValue: action.value,
      };
    // case 'SET_CURRENT_USER':
    //   return {
    //     ...state,
    //     currentUser: action.value,
    //     // on en profite pour refermer le formulaire de login
    //   };
    default:
      return state;
  }
};

export default reducer;
