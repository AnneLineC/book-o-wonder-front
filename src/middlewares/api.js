import axios from 'axios';

import { LOGIN_ATTEMPT, REGISTER_ATTEMPT, LOAD_CATEGORIES_FROM_API, LOAD_BOOKS_BY_CATEGORY_FROM_API, setBooksList } from '../actions';

const baseURI = 'http://3.84.188.125';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT: {
      const { emailValue, passwordValue } = store.getState().user;
      console.log('test');
      console.log(emailValue, passwordValue);

      // api's url so that we can connect back and front together
      axios.post(`${baseURI}/api/login_check`, {
        username: emailValue,
        password: passwordValue,
      }).then(
        (response) => {
          console.log(response.data);

          // dispatch to log the user
          // store.dispatch(setCurrentUser(response.data));
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

      console.log(nicknameValue, emailValue, passwordValue);

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
      // api's url so that we can connect back and front together
      axios.get(`${baseURI}/api/v1/category`).then(
        (response) => {
          // console.log(response);

          // dispatch to log the user
          // store.dispatch(setCurrentUser(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }
    case LOAD_BOOKS_BY_CATEGORY_FROM_API: {
      axios.get(`${baseURI}/api/v1/category/${action.id}`).then(
        (response) => {
          console.log(response);
          store.dispatch(setBooksList(response.data.books));
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
