export const RECEIVE_AUTH_TOKEN = "RECEIVE_AUTH_TOKEN";
export const IS_LOGGED_IN = "IS_LOGGED_IN";
export const LOGOUT_USER = "LOGOUT_USER";
// export const REQEUST_USER_INFO = "REQEUST_USER_INFO";
export const REQUEST_EMAIL = "REQUEST_EMAIL";
export const LOAD_SPLASH_SCREEN = "LOAD_SPLASH_SCREEN";
export const RECEIVE_AUTH_TOKEN_SPINNER = "RECEIVE_AUTH_TOKEN_SPINNER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const RECEIVE_SIGN_UP_ERROR = "RECEIVE_SIGN_UP_ERROR";

export const RECEIVE_USERNAME = "RECEIVE_USERNAME";

import fetch from 'cross-fetch';
import { AsyncStorage } from 'react-native';


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

//// in use $explain$
// export function getUserInfo(email, auth_token) { // CETU
export function getUserInfo(username, auth_token) {
  return function action(dispatch) {
    // const request = fetch(`http://10.0.2.2:3000/users/${email}`, { //CETU
    const request = fetch(`http://10.0.2.2:3000/users/${username}`, {
      method: 'GET',
        headers: {
          "Authorization": auth_token
        }
    });

    return request.then(
      // response => { response.status == 200 ? dispatch(isLoggedIn(true)) : dispatch(isLoggedIn(false))},
      response => {if (response.status == 200) {
        dispatch(isLoggedIn(true));
      } else {
        dispatch(isLoggedIn(false));
      }},
      err => console.log('get userinfo error ', err)
    ); // oringal
  }
}


////
//// in use $explain$
// export function getThatToken(email, password) { // CETU
  export function getThatToken(username, password) {

  return function action(dispatch) {

    const request = fetch('http://10.0.2.2:3000/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // email: `${email}`, // CETU
        username: `${username}`,
        password: `${password}`
      })
    });

     return request.then(
      response => response.json(),
      // response => console.log("zzzzz", response.json()),
    )
    .then(
      json => dispatch(receiveAuthToken(json)),
      err => console.log("jsonerror ", json)
    );
  }
}

/// sign UP function
export function signupUser(email, username, password, password_confirmation) {
  return function action(dispatch) {

    const request = fetch('http://10.0.2.2:3000/users', {
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

    // console.log('request?!', request);
    // return request.then(
    //   response => {if (response.status !== 200) {
    //   // response => {if (response.status === 422) {
    //     console.log('response erro!!!! =>>>', response)};
    //     // dispatch(receiveError("An error occured"))};
    //     // dispatch(receiveError('Username or Email Taken'))};
    //   },
    //   err => dispatch(receiveError('signup failed'))
    // );
    ////////////////
    return request.then(
      response => response.json(),
      err => console.log('TO ERR ZZ', err),
    )
    .then(
      json => {
        if (json[0] === 'Username is taken') { //// json[0] is the error message recieved from ACtive Record, for some reason it will not send it through errors, this was the simpliest fix
          dispatch(receiveSignUpError('Username is taken.'));
        } else if (json[0] === 'Email is taken') {
          dispatch(receiveSignUpError('Email already in use.'));
        };
      },
      err => console.log('Sign up error has occurred', err),
    );
  }
}
