export const RECEIVE_AUTH_TOKEN = "RECEIVE_AUTH_TOKEN";
export const IS_LOGGED_IN = "IS_LOGGED_IN";
export const LOGOUT_USER = "LOGOUT_USER";
export const REQUEST_EMAIL = "REQUEST_EMAIL";
export const LOAD_SPLASH_SCREEN = "LOAD_SPLASH_SCREEN";
export const RECEIVE_AUTH_TOKEN_SPINNER = "RECEIVE_AUTH_TOKEN_SPINNER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const RECEIVE_SIGN_UP_ERROR = "RECEIVE_SIGN_UP_ERROR";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";

import { HOST } from '../environment';  // boolean, if true HOST = emulator IP, if flase = phone IP

import fetch from 'cross-fetch';

export const loadSplashScreen = (splash_screen) => ({
  type: LOAD_SPLASH_SCREEN,
  splash_screen
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER,
}); // the new stuff

export const receiveAuthToken = auth_token => ({
  type: RECEIVE_AUTH_TOKEN,
  auth_token
});

export const receiveAuthTokenAndSpinner = (auth_token, splash_screen) => ({
  type: RECEIVE_AUTH_TOKEN_SPINNER,
  auth_token,
  splash_screen,
});

export const isLoggedIn = loggedIn => ({
  type: IS_LOGGED_IN,
  loggedIn
});

export const requestEmail = email => ({
  type: REQUEST_EMAIL,
  email,
});

export const receiveUsername = username => ({
  type: RECEIVE_USERNAME,
  username,
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const receiveSignUpError = error => ({
  type: RECEIVE_SIGN_UP_ERROR,
  error
});

////

export function getUserInfo(username, auth_token) { // for receiving all user info, worksouts etc.
  return function action(dispatch) {
    const request = fetch(`${HOST}/users/${username}`, {
      method: 'GET',
        headers: {
          "Authorization": auth_token
        }
    });

    return request.then(
      response => {if (response.status == 200) {
        dispatch(isLoggedIn(true));
      } else {
        dispatch(isLoggedIn(false));
      }},
      err => dispatch(receiveError('User Not Found')),
    );
  }
}


//// used for logging in or signing in
  export function getThatToken(username, password) {

  return function action(dispatch) {

    const request = fetch(`${HOST}/authenticate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`
      })
    });

     return request.then(
      response => response.json(),
    )
    .then(
      json => dispatch(receiveAuthToken(json)),
      err => dispatch(receiveError('Unathorized Token')),
    );
  }
}

/// sign UP function
export function signupUser(email, username, password, password_confirmation) {
  return function action(dispatch) {

    const request = fetch(`${HOST}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${email}`,
        username: `${username}`,
        password: `${password}`,
        password_confirmation: `${password_confirmation}`
      })
    });

    return request.then(
      response => response.json(),
      err => dispatch(receiveError('Signup Failed')),
    )
    .then(
      json => {
        if (json[0] === 'Username is taken') { //// json[0] is the error message recieved from ACtive Record, for some reason it will not send it through errors, this was the simpliest fix
          dispatch(receiveSignUpError('Username is taken.'));
        } else if (json[0] === 'Email is taken') {
          dispatch(receiveSignUpError('Email already in use.'));
        };
      },
      err => dispatch(receiveError('Signup Failed')),
    );
  }
}
