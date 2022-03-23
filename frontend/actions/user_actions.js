export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RESET_USER = "RESET_USER";

export const resetUser = () => ({
  type: RESET_USER,
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// export function requestCurrentUser(email, auth_token) { // CETU
export function requestCurrentUser(username, auth_token) {
  return function action(dispatch) {
    // const request = fetch(`http://10.0.2.2:3000/users/${email}`, { // CETU
    const request = fetch(`http://10.0.2.2:3000/users/${username}`, {
      method: 'GET',
        headers: {
          "Authorization": auth_token
        }
    });

    return request.then(
      response => response.json(),
      err => console.log("user error"),
    )
    .then(
      json => dispatch(receiveCurrentUser({id: json.id, email: json.email, username: json.username})),
      err => console.log("user json error"),
    );
  }
}
