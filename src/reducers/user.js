import {
  SET_FIELD_VALUE,
  SET_PINNEDPAGE,
  SET_CURRENT_USER_JWT,
  SET_CURRENT_USER_DATA,
} from '../actions';

export const initialState = {
  token: null,
  logged: false,
  nicknameValue: '',
  emailValue: '',
  passwordValue: '',
  passwordConfirmValue: '',
  pinnedPages: [
    {
      bookId: 1,
      location: 'epubcfi(/6/8[chapter_001]!/4/2/26/1:0)',
    },
    {
      bookId: 2,
      location: 'test2',
    },
  ],
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
    case SET_PINNEDPAGE: {
      const pinnedPageIndex = state.pinnedPages.findIndex(
        (pinnedPage) => (pinnedPage.bookId == action.id),
      );
      const { pinnedPages } = state;
      pinnedPages[pinnedPageIndex].location = action.location;

      return {
        ...state,
        pinnedPages: [
          ...pinnedPages,
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;
