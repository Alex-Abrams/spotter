export const RECEIVE_CHART_WORKOUTS = "RECEIVE_CHART_WORKOUTS";
export const RECEIVE_CHART_LIFTS = "RECEIVE_CHART_LIFTS";
import { requestAllWorkouts, requestAllWorkoutExercises } from './prev_workout_actions';

export const receiveChartWorkouts = (workouts) => ({
  type: RECEIVE_CHART_WORKOUTS,
  workouts
});

export const receiveChartExercises = (exercises) => ({
  type: RECEIVE_CHART_LIFTS,
  exercises
});



export function requestChartWorkouts(user_id, auth_token) { // need this but.. it could just loop
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
      // json => dispatch(receiveChartWorkouts(json)),
      json => {
        console.log(Object.values(json));
      },
      err => console.log("chart workouts json error", err),
    );
  }
}

export function requestChartExercises(user_id, workout_id, auth_token) {
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
      json => dispatch(receiveChartExercises(json)),
      err => console.log("bottom requestAllWorkoutExercises", err),
    );
  }
}
