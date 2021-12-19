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

export const setBooksListByCategory = (data) => ({
  type: SET_BOOKS_LIST_BY_CATEGORY,
  data,
});

export const LOAD_BOOK_FROM_API = 'LOAD_BOOK_FROM_API';

export const loadBookFromAPI = (id) => ({
  type: LOAD_BOOK_FROM_API,
  id,
});

export const SET_BOOK = 'SET_BOOK';

export const setBook = (data) => ({
  type: SET_BOOK,
  data,
});

export const LOAD_HIGHLIGHTED_BOOKS_FROM_API = 'LOAD_HIGHLIGHTED_BOOKS_FROM_API';

export const loadHighlightedBooksFromAPI = () => ({
  type: LOAD_HIGHLIGHTED_BOOKS_FROM_API,
});

export const SET_HIGHLIGHTED_BOOKS = 'SET_HIGHLIGHTED_BOOKS';

export const setHighlightedBooks = (data) => ({
  type: SET_HIGHLIGHTED_BOOKS,
  data,
});

export const LOAD_MOST_PINNED_BOOK_FROM_API = 'LOAD_MOST_PINNED_BOOK_FROM_API';

export const loadMostPinnedBookFromAPI = () => ({
  type: LOAD_MOST_PINNED_BOOK_FROM_API,
});

export const SET_MOST_PINNED_BOOK = 'SET_MOST_PINNED_BOOK';

export const setMostPinnedBook = (data) => ({
  type: SET_MOST_PINNED_BOOK,
  data,
});

export const LOAD_MOST_READ_CATEGORY_FROM_API = 'LOAD_MOST_READ_CATEGORY_FROM_API';

export const loadMostReadCategoryFromAPI = () => ({
  type: LOAD_MOST_READ_CATEGORY_FROM_API,
});

export const SET_MOST_READ_CATEGORY = 'SET_MOST_READ_CATEGORY';

export const setMostReadCategory = (data) => ({
  type: SET_MOST_READ_CATEGORY,
  data,
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

export const CHANGE_PASSWORD_ATTEMPT = 'CHANGE_PASSWORD_ATTEMPT';

export const changePasswordAttempt = () => ({
  type: CHANGE_PASSWORD_ATTEMPT,
});

export const CONTACT_FORM_ATTEMPT = 'CONTACT_FORM_ATTEMPT';

export const contactFormAttempt = () => ({
  type: CONTACT_FORM_ATTEMPT,
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

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
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

export const SET_FORM_SENT_STATE = 'SET_FORM_SENT_STATE';

export const setFormSentState = (formName, sent) => ({
  type: SET_FORM_SENT_STATE,
  formName,
  sent,
});

export const SET_FORM_ERROR_STATE = 'SET_FORM_ERROR_STATE';

export const setFormErrorState = (formName, error) => ({
  type: SET_FORM_ERROR_STATE,
  formName,
  error,
});

// ===============
// BOOKS
// ===============

export const SET_NEW_PINNEDPAGE = 'SET_NEW_PINNEDPAGE';

export const setNewPinnedPage = (data) => ({
  type: SET_NEW_PINNEDPAGE,
  data,
});

export const UPDATE_PINNEDPAGE = 'UPDATE_PINNDEDPAGE';

export const updatePinnedpage = (data) => ({
  type: UPDATE_PINNEDPAGE,
  data,
});

export const POST_NEW_PINNEDPAGE_TO_BDD = 'POST_NEW_PINNEDPAGE_TO_BDD';

export const postNewPinnedpageToBDD = (userId, bookId, location) => ({
  type: POST_NEW_PINNEDPAGE_TO_BDD,
  userId,
  bookId,
  location,
});

export const UPDATE_PINNEDPAGE_IN_BDD = 'UPDATE_PINNEDPAGE_IN_BDD';

export const updatePinnepageInBDD = (pinnedpageId, userId, bookId, location) => ({
  type: UPDATE_PINNEDPAGE_IN_BDD,
  pinnedpageId,
  userId,
  bookId,
  location,
});

export const DELETE_PINNEDPAGE_IN_BDD = 'DELETE_PINNEDPAGE_IN_BDD';

export const deletePinnedpageInBDD = (pinnedpageId) => ({
  type: DELETE_PINNEDPAGE_IN_BDD,
  pinnedpageId,
});

export const REMOVE_PINNEDPAGE = 'REMOVE_PINNEDPAGE';

export const removePinnedpage = (pinnedpageId) => ({
  type: REMOVE_PINNEDPAGE,
  pinnedpageId,
});
