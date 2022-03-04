export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RESET_USER = "RESET_USER";

export const resetUser = () => ({
  type: RESET_USER,
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export function requestCurrentUser(email, auth_token) {
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/users/${email}`, {
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
      // json => console.log("json!!", {id: json.id, email: json.email}),
      json => dispatch(receiveCurrentUser({id: json.id, email: json.email, username: json.username})),
      err => console.log("user json error"),
    );
  }
}
