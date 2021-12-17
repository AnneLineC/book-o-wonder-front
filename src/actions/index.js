// ===============
// LOAD FROM API
// ===============

export const LOAD_CATEGORIES_FROM_API = 'LOAD_CATEGORIES_FROM_API';

export const loadCategoriesFromAPI = () => ({
  type: LOAD_CATEGORIES_FROM_API,
});

export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (list) => ({
  type: SET_CATEGORIES,
  list,
});

export const LOAD_SOUNDS_FROM_API = 'LOAD_SOUNDS_FROM_API';

export const loadSoundsFromAPI = () => ({
  type: LOAD_SOUNDS_FROM_API,
});

export const SET_SOUNDS = 'SET_SOUNDS';

export const setSounds = (data) => ({
  type: SET_SOUNDS,
  data,
});

export const LOAD_SOUND_FROM_API = 'LOAD_SOUND_FROM_API';

export const loadSoundFromAPI = (id) => ({
  type: LOAD_SOUND_FROM_API,
  id,
});

export const SET_CURRENT_SOUND = 'SET_CURRENT_SOUND';

export const setCurrentSound = (data) => ({
  type: SET_CURRENT_SOUND,
  data,
});

export const LOAD_BOOKS_BY_CATEGORY_FROM_API = 'LOAD_BOOKS_BY_CATEGORY_FROM_API';

export const loadBooksByCategoryFromAPI = (id) => ({
  type: LOAD_BOOKS_BY_CATEGORY_FROM_API,
  id,
});

export const SET_BOOKS_LIST_BY_CATEGORY = 'SET_BOOKS_LIST_BY_CATEGORY';

export const setBooksListByCategory = (booksList) => ({
  type: SET_BOOKS_LIST_BY_CATEGORY,
  booksList,
});

// ===============
// FORMS
// ===============

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';

export const loginAttempt = () => ({
  type: LOGIN_ATTEMPT,
});

export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';

export const registerAttempt = () => ({
  type: REGISTER_ATTEMPT,
});

export const EDIT_ACCOUNT_ATTEMPT = 'EDIT_ACCOUNT_ATTEMPT';

export const editAccountAttempt = () => ({
  type: EDIT_ACCOUNT_ATTEMPT,
});

export const EDIT_PICTURE_ACCOUNT_ATTEMPT = 'EDIT_PICTURE_ACCOUNT_ATTEMPT';

export const editPictureAccountAttempt = (picture) => ({
  type: EDIT_PICTURE_ACCOUNT_ATTEMPT,
  picture,
});

export const SET_CURRENT_USER_JWT = 'SET_CURRENT_USER';

export const setCurrentUserJWT = (token) => ({
  type: SET_CURRENT_USER_JWT,
  token,
});

export const SET_CURRENT_USER_DATA = 'SET_CURRENT_USER_DATA';

export const setCurrentUserData = (data) => ({
  type: SET_CURRENT_USER_DATA,
  data,
});

export const SEND_CONTACT_FORM_ATTEMPT = 'SEND_CONTACT_FORM_ATTEMPT';

export const sendContactFormAttempt = () => ({
  type: SEND_CONTACT_FORM_ATTEMPT,
});

// Contains the values of the fields (type + name and value)
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const setFieldValue = (name, value) => ({
  type: SET_FIELD_VALUE,
  name,
  value,
});

export const SET_ACCOUNT_PICTURE = 'SET_ACCOUNT_PICTURE';

export const setAccountPicture = (id, picture) => ({
  type: SET_ACCOUNT_PICTURE,
  id,
  picture,
});

// ===============
// DISPLAY ACTIONS
// ===============

export const SET_DISPLAY = 'SET_DISPLAY';

export const setDisplay = (name) => ({
  type: SET_DISPLAY,
  name,
});

export const SET_MEDIA_PLAYER_DISPLAY = 'SET_MEDIA_PLAYER_DISPLAY';

export const setMediaPlayerDisplay = (property, value) => ({
  type: SET_MEDIA_PLAYER_DISPLAY,
  property,
  value,
});

// ===============
// BOOKS
// ===============

export const SET_PINNEDPAGE = 'SET_PINNEDPAGE';

export const setPinnedPage = (id, location) => ({
  type: SET_PINNEDPAGE,
  id,
  location,
});
