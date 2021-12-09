import axios from 'axios';

import {
  LOGIN_ATTEMPT,
  setCurrentUserJWT,
  REGISTER_ATTEMPT,
  LOAD_CATEGORIES_FROM_API,
  setCategories,
  setCurrentUserData,
} from '../actions';

const baseURI = 'http://52.87.193.62';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT: {
      const { emailValue, passwordValue } = store.getState().user;

      axios.post(`${baseURI}/api/login_check`, {
        username: emailValue,
        password: passwordValue,
      }).then(
        (response) => {
          console.log(response.data);

          // dispatch to get the user's token
          store.dispatch(setCurrentUserJWT(response.data.token));

          // we save the token into axios instance
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

          axios.get(
            `${baseURI}/api/v1/user/user`,
          ).then(
            (result) => {
              console.log(result);
              store.dispatch(setCurrentUserData(result.data));
            },
          ).catch(
            (error) => console.log(error),
          );
        },
      ).catch(
        (error) => console.log(error),
      );

      next(action);
      break;
    }

    case REGISTER_ATTEMPT: {
      const {
        nicknameValue,
        emailValue,
        passwordValue,
        // passwordConfirmValue,
      } = store.getState().user;

      // api's url so that we can connect back and front together
      axios.post(`${baseURI}/api/v1/register`, {
        name: nicknameValue,
        email: emailValue,
        password: passwordValue,
        // passwordconfirm: passwordConfirmValue,
      }).then(
        (response) => {
          console.log(response);

          // dispatch to log the user
          // store.dispatch(setCurrentUser(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case LOAD_CATEGORIES_FROM_API: {
      axios.get(`${baseURI}/api/v1/category`).then(
        (response) => {
          console.log(response);
          store.dispatch(setCategories(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default apiMiddleWare;
