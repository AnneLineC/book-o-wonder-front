import axios from 'axios';

import { LOGIN_ATTEMPT, setCurrentUser } from '../actions';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT: {
      const { emailValue, passwordValue } = store.getState();

      // api's url so that we can connect back and front together
      axios.post('', {
        email: emailValue,
        password: passwordValue,
      }).then(
        (response) => {
          console.log(response.data);

          // dispatch to log the user
          store.dispatch(setCurrentUser(response.data));
        },
      ).catch(
        (error) => console.log(error),
      );

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;