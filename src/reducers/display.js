import { SET_DISPLAY } from "../actions";

export const initialState = {
    connexionMenu: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_DISPLAY :
        return {
            ...state,
            // isConnexionMenuOpen: !state.isConnexionMenuOpen,
            [action.name]: !state[action.name],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  