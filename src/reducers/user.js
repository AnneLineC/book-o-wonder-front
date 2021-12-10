import {
  SET_FIELD_VALUE, SET_PINNEDPAGE,
} from '../actions';

export const initialState = {
  currentUser: null,
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
    // case 'SET_CURRENT_USER':
    //   return {
    //     ...state,
    //     currentUser: action.value,
    //     // on en profite pour refermer le formulaire de login
    //   };
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
