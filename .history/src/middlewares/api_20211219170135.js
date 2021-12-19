import axios from 'axios';

import {
  LOGIN_ATTEMPT,
  setCurrentUserJWT,
  REGISTER_ATTEMPT,
  LOAD_CATEGORIES_FROM_API,
  setCategories,
  setCurrentUserData,
  LOAD_SOUNDS_FROM_API,
  setBooksListByCategory,
  LOAD_BOOKS_BY_CATEGORY_FROM_API,
  LOAD_BOOK_FROM_API,
  setBook,
  setSounds,
  LOAD_SOUND_FROM_API,
  setCurrentSound,
  CHANGE_PASSWORD_ATTEMPT,
  ASK_RESET_ATTEMPT,
  RESET_PASSWORD_ATTEMPT,
} from '../actions';

const apiMiddleWare = (store) => (next) => (action) => {
  const { baseURI } = store.getState().display;

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
        passwordConfirmValue,
      } = store.getState().user;

      if (passwordValue === passwordConfirmValue) {
        // api's url so that we can connect back and front together
        axios.post(`${baseURI}/api/v1/register`, {
          name: nicknameValue,
          email: emailValue,
          password: passwordValue,
        }).then(
          (response) => {
            console.log(response);

          // dispatch to log the user
          // store.dispatch(setCurrentUser(response.data));
          },
        ).catch(
          (error) => console.log(error.toJSON()),
        );
      }

      next(action);
      break;
    }
    case ASK_RESET_ATTEMPT: {
      const {
        emailValue,
      } = store.getState().user;

      // api's url so that we can connect back and front together
      axios.post(`${baseURI}/api/v1/forgottenpassword`, {
        email: emailValue,
      }).then(
        (response) => {
          console.log(response);
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }
    case RESET_PASSWORD_ATTEMPT: {
      const {
        newPasswordValue,
        newPasswordConfirmValue,
      } = store.getState().user;
      

      if (newPasswordValue === newPasswordConfirmValue) {
        // api's url so that we can connect back and front together
        axios.patch(`${baseURI}/api/v1/resetpassword/${action.token}`, {
          password: newPasswordValue,
        }).then(
          (response) => {
            console.log(response);

          // dispatch to log the user
          // store.dispatch(setCurrentUser(response.data));
          },
        ).catch(
          (error) => console.log(error.toJSON()),
        );
      }

      next(action);
      break;
    }
    case CHANGE_PASSWORD_ATTEMPT: {
      const {
        passwordValue,
        newPasswordValue,
        newPasswordConfirmValue,
      } = store.getState().user;

      if (newPasswordValue === newPasswordConfirmValue) {
        // api's url so that we can connect back and front together
        axios.patch(`${baseURI}/api/v1/account/changepassword`, {
          old_password: passwordValue,
          new_password: newPasswordValue,
        }).then(
          (response) => {
            console.log(response);

          // dispatch to log the user
          // store.dispatch(setCurrentUser(response.data));
          },
        ).catch(
          (error) => console.log(error.toJSON()),
        );
      }

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

    case LOAD_BOOKS_BY_CATEGORY_FROM_API: {
      axios.get(`${baseURI}/api/v1/category/${action.id}`).then(
        (response) => {
          console.log(response);
          store.dispatch(setBooksListByCategory(response.data.books));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }
    case LOAD_SOUNDS_FROM_API: {
      axios.get(`${baseURI}/api/v1/audio`).then(
        (response) => {
          console.log(response);
          store.dispatch(setSounds(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );
      next(action);
      break;
    }
    case LOAD_SOUND_FROM_API: {
      axios.get(`${baseURI}/api/v1/audio/${action.id}`).then(
        (response) => {
          console.log(response);
          store.dispatch(setCurrentSound(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );
      next(action);
      break;
    }

    case LOAD_BOOK_FROM_API: {
      axios.get(`${baseURI}/api/v1/book/${action.id}`).then(
        (response) => {
          console.log('test');
          console.log(response);
          store.dispatch(setBook(response.data));
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
