export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';

export const loginAttempt = () => ({
    type: LOGIN_ATTEMPT,
});


export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser= (user) => ({
    type: SET_CURRENT_USER,
    user,
});


// Contains the values of the fields (type + name and value)
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const setFieldValue = (name, value) => ({
    type: SET_FIELD_VALUE,
    name,
    value,
});
