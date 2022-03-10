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


export function requestChartExercises(user_id, auth_token) {
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/users/${user_id}/workouts/all_lifts/lifts`, {
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
