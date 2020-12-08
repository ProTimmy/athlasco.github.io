import { firebaseApp } from '../../firebase/Firebase';

export const AUTH_LOGIN_REQUEST = 'LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'LOGIN_FAILURE';

export const AUTH_LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const AUTH_LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const AUTH_VERIFY_REQUEST = 'VERIFY_REQUEST';
export const AUTH_VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const requestLoginAction = () => ({
  type: AUTH_LOGIN_REQUEST,
});

const receiveLoginAction = (user) => ({
  type: AUTH_LOGIN_SUCCESS,
  user,
});

const loginErrorAction = () => ({
  type: AUTH_LOGIN_FAILURE,
});

const requestLogoutAction = () => ({
  type: AUTH_LOGOUT_REQUEST,
});

const receiveLogoutAction = () => ({
  type: AUTH_LOGOUT_SUCCESS,
});

const logoutErrorAction = () => ({
  type: AUTH_LOGOUT_FAILURE,
});

const verifyRequestAction = () => ({
  type: AUTH_VERIFY_REQUEST,
});

const verifySuccessAction = () => ({
  type: AUTH_VERIFY_SUCCESS,
});

export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLoginAction());
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(receiveLoginAction(user));
    })
    .catch(() => {
      dispatch(loginErrorAction());
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogoutAction());
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogoutAction());
    })
    .catch(() => {
      dispatch(logoutErrorAction());
    });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequestAction());
  firebaseApp
    .auth()
    .onAuthStateChanged((user) => {
      if (user != null) {
        dispatch(receiveLoginAction(user));
      }

      dispatch(verifySuccessAction());
    });
};
