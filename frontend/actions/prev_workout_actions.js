export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const RECEIVE_WORKOUT_LIFTS = "RECEIVE_WORKOUT_LIFTS";

export const receiveAllWorkouts = (workouts) => ({
  type: "RECEIVE_ALL_WORKOUTS",
  workouts
});

export const receiveWorkoutLifts = (lifts) => ({
  type: "RECEIVE_WORKOUT_LIFTS",
  lifts
});

// /users/:user_id/workouts
export function requestAllWorkouts(user_id, auth_token) {
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/users/${user_id}/workouts`, {
      method: 'GET',
        headers: {
          "Authorization": auth_token
        }
    });

    return request.then(
      response => response.json(),
      err => console.log("errrr", err),
    )
    .then(
      json => console.log("all workouts json", json),
      err => console.log("all owrkouts json error", err),
    );
  }
}
