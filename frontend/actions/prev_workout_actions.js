export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES";

export const receiveAllWorkouts = (workouts) => ({
  type: "RECEIVE_ALL_WORKOUTS",
  workouts
});

export const receiveExercises = (exercises) => ({
  type: "RECEIVE_EXERCISES",
  exercises
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
      json => dispatch(receiveAllWorkouts(json)),
      err => console.log("all owrkouts json error", err),
    );
  }
}

// users/:user_id/workouts/:workout_id/lifts(.:format)

export function requestAllWorkoutExercises(user_id, workout_id, auth_token) {
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/users/${user_id}/workouts/${workout_id}/lifts`, {
      method: 'GET',
        headers: {
          "Authorization": auth_token
        }
    });

    return request.then(
      response => response.json(),
      err => console.log("top requestAllWorkoutExercises error", err),
    )
    .then(
      json => dispatch(receiveExercises(json)),
      err => console.log("bottom requestAllWorkoutExercises", err),
    );
  }
}
