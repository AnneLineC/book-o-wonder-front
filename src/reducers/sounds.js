export const initialState = {
  musicsList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SAVE_FAVORITES:
    //   return {
    //     ...state,
    //     favorites: action.favorites,
    //   };
    default:
      return state;
  }
};

export default reducer;
