import {
  RECEIVE_AUTH_TOKEN,
  LOGGED_IN_USER,
  IS_LOGGED_IN,
  LOGOUT_USER,
  REQEUST_USER_INFO,
  REQUEST_EMAIL,
  LOAD_SPLASH_SCREEN,
  RECEIVE_AUTH_TOKEN_SPINNER,
  RECEIVE_ERROR,
  RECEIVE_SIGN_UP_ERROR,
  RECEIVE_USERNAME, // CETU
} from '../actions/auth_actions';

import merge from 'lodash/merge';

const INITIAL_STATE = {
  isLoading: false,
  loggedIn: false,
};

const _nullUser = Object.freeze({
  loggedIn: false,
  auth_token: null,
  email: null,
  splash_screen: false,
  error: null,
  signup_error: null,
  username: null, // CETU
});

const authReducer = (state = { loggedIn: false }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_AUTH_TOKEN:
      return merge({}, state, action.auth_token);

    case IS_LOGGED_IN:
      return merge({}, state, { loggedIn: action.loggedIn }, { splash_screen: false }); // splash_screen closes the spinner

    case LOGOUT_USER:
      return _nullUser;

    case REQEUST_USER_INFO:
      return merge({}, state, { user: action.currentUser });

    case REQUEST_EMAIL:
      return merge({}, state, { email: action.email });

    case RECEIVE_USERNAME:
        return merge({}, state, {username: action.username});

    case LOAD_SPLASH_SCREEN:
      return merge({}, state, { splash_screen: action.splash_screen });

    case RECEIVE_AUTH_TOKEN_SPINNER:
      return merge({}, state, action.auth_token, { splash_screen: action.splash_screen }); // slpash screen opens spinner 

    case RECEIVE_ERROR:
      return merge({}, state, { error: action.error});

    case RECEIVE_SIGN_UP_ERROR:
      return merge({}, state, { signup_error: action.error });

    default:
      return state;
  }
};

export default authReducer;
