import {
  SET_FIELD_VALUE,
  SET_NEW_PINNEDPAGE,
  SET_CURRENT_USER_JWT,
  SET_CURRENT_USER_DATA,
  LOGOUT,
  UPDATE_PINNDEDPAGE,
} from '../actions';

export const initialState = {
  token: null,
  logged: false,
  nicknameValue: '',
  emailValue: '',
  passwordValue: '',
  passwordConfirmValue: '',
  pinnedpages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_CURRENT_USER_JWT:
      return {
        ...state,
        token: action.token,
      };
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        logged: true,
        ...action.data,
      };
    case SET_NEW_PINNEDPAGE: {
      return {
        ...state,
        pinnedpages: [
          ...state.pinnedpages,
          action.data,
        ],
      };
    }
    case UPDATE_PINNDEDPAGE: {
      const pinnedPageIndex = state.pinnedpages.findIndex(
        (pinnedPage) => (pinnedPage.book.id === parseInt(action.data.book.id, 10)),
      );
      // console.log(pinnedPageIndex);
      const { pinnedpages } = state;
      pinnedpages[pinnedPageIndex] = action.data;
      // console.log(pinnedpages);

      return {
        ...state,
        pinnedpages: [
          ...pinnedpages,
        ],
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
