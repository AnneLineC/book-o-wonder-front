import axios from 'axios';

import {
  LOGIN_ATTEMPT,
  setCurrentUserJWT,
  REGISTER_ATTEMPT,
  // EDIT_ACCOUNT_ATTEMPT,
  // EDIT_PICTURE_ACCOUNT_ATTEMPT,
  CONTACT_FORM_ATTEMPT,
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
  POST_NEW_PINNEDPAGE_TO_BDD,
  UPDATE_PINNEDPAGE_IN_BDD,
  setNewPinnedPage,
  updatePinnedpage,
  DELETE_PINNEDPAGE_IN_BDD,
  removePinnedpage,
  CHANGE_PASSWORD_ATTEMPT,
  LOAD_HIGHLIGHTED_BOOKS_FROM_API,
  setHighlightedBooks,
  LOAD_MOST_PINNED_BOOK_FROM_API,
  setMostPinnedBook,
  LOAD_MOST_READ_CATEGORY_FROM_API,
  setMostReadCategory,
  setFormSentState,
  setFormErrorState,
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
        axios.post(`${baseURI}/api/v1/register`, {
          name: nicknameValue,
          email: emailValue,
          password: passwordValue,
        }).then(
          (response) => {
            console.log(response);
            store.dispatch(setFormSentState('registerForm', true));
          },
        ).catch(
          (error) => {
            console.log(error.toJSON());
            store.dispatch(setFormErrorState('registerForm', true));
          },
        );
      }
      else {
        store.dispatch(setFormErrorState('registerForm', true));
      }

      next(action);
      break;
    }
    // case EDIT_PICTURE_ACCOUNT_ATTEMPT: {
    //   const formData = new FormData();
    //   const fileInput = document.querySelector('#profilePic');
    //   formData.append('profilePic', fileInput.files[0]);
    //   for (const [key, value] of formData.entries()) {
    //     console.log(key, value);
    //   }

    //   // api's url so that we can connect back and front together
    //   axios.patch(`${baseURI}/api/v1/user/profilpic/4`, {
    //     data: formData,
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   }).then(
    //     (response) => {
    //       console.log(response);

    //       // dispatch to log the user
    //       // store.dispatch(setCurrentUser(response.data));
    //     },
    //   ).catch(
    //     (error) => console.log(error.toJSON()),
    //   );

    //   next(action);
    //   break;
    // }
    // case EDIT_ACCOUNT_ATTEMPT: {
    //   const {
    //     nicknameValue,
    //     emailValue,
    //   } = store.getState().user;

    //   // api's url so that we can connect back and front together
    //   axios.post(`${baseURI}/api/v1/user`, {
    //     name: nicknameValue,
    //     email: emailValue,
    //   }).then(
    //     (response) => {
    //       console.log(response);

    //       // dispatch to log the user
    //       // store.dispatch(setCurrentUser(response.data));
    //     },
    //   ).catch(
    //     (error) => console.log(error.toJSON()),
    //   );
    //   next(action);
    //   break;
    // }
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
          },
        ).catch(
          (error) => console.log(error.toJSON()),
        );
      }
      next(action);
      break;
    }
    case CONTACT_FORM_ATTEMPT: {
      const {
        emailValue, nicknameValue, objectValue, contentValue,
      } = store.getState().user;

      axios.post(`${baseURI}/api/v1/contact`, {
        username: nicknameValue,
        email: emailValue,
        content: contentValue,
        object: objectValue,
      }).then(
        (response) => {
          console.log(response);
        },
      ).catch(
        (error) => console.log(error),
      );

      next(action);
      break;
    }
    case LOAD_CATEGORIES_FROM_API: {
      axios.get(`${baseURI}/api/v1/category`).then(
        (response) => {
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
          store.dispatch(setBooksListByCategory(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }
    case LOAD_SOUNDS_FROM_API: {
      axios.get(`${baseURI}/api/v1/audio/category`).then(
        (response) => {
          // console.log(response);
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
          // console.log(response);
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
          console.log(response);
          store.dispatch(setBook(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case POST_NEW_PINNEDPAGE_TO_BDD: {
      axios.post(`${baseURI}/api/v1/pinnedpage`, {
        page: action.location,
        book: action.bookId,
        user: action.userId,
      }).then(
        (response) => {
          console.log('ceci est un appel pour créer un marque page');
          console.log(response);
          store.dispatch(setNewPinnedPage(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case UPDATE_PINNEDPAGE_IN_BDD: {
      console.log('update demandé !!');
      axios.put(`${baseURI}/api/v1/pinnedpage/${action.pinnedpageId}`, {
        page: action.location,
        book: action.bookId,
        user: action.userId,
      }).then(
        (response) => {
          console.log('ceci est un appel pour updater un marque page');
          console.log(response);
          store.dispatch(updatePinnedpage(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case DELETE_PINNEDPAGE_IN_BDD: {
      console.log('delete demandé !!');
      axios.delete(`${baseURI}/api/v1/pinnedpage/${action.pinnedpageId}`).then(
        (response) => {
          console.log('ceci est un appel pour supprimer un marque page');
          console.log(response);
          store.dispatch(removePinnedpage(action.pinnedpageId));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case LOAD_HIGHLIGHTED_BOOKS_FROM_API: {
      axios.get(`${baseURI}/api/v1/book/ishome`).then(
        (response) => {
          // console.log('Livres mis en avant :');
          // console.log(response);
          store.dispatch(setHighlightedBooks(response.data));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case LOAD_MOST_PINNED_BOOK_FROM_API: {
      axios.get(`${baseURI}/api/v1/pinnedpage/mostpinned`).then(
        (response) => {
          // console.log('Livre le plus mis en marque page :');
          // console.log(response.data[0]);
          store.dispatch(setMostPinnedBook(response.data[0].book));
        },
      ).catch(
        (error) => console.log(error.toJSON()),
      );

      next(action);
      break;
    }

    case LOAD_MOST_READ_CATEGORY_FROM_API: {
      axios.get(`${baseURI}/api/v1/category/mostread`).then(
        (response) => {
          // console.log('Livre le plus mis en marque page :');
          console.log(response.data[0]);
          store.dispatch(setMostReadCategory(response.data[0]));
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
