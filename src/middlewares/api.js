import axios from 'axios';

import { LOGIN_ATTEMPT, setCurrentUser, REGISTER_ATTEMPT } from '../actions';

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

    case REGISTER_ATTEMPT: {
      const { nicknameValue, emailValue, passwordValue, passwordConfirmValue } = store.getState();

      // api's url so that we can connect back and front together
      axios.post('', {
        nickname: nicknameValue,
        email: emailValue,
        password: passwordValue,
        passwordconfirm: passwordConfirmValue,
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