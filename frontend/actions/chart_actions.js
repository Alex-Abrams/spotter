export const RECEIVE_CHART_WORKOUTS = "RECEIVE_CHART_WORKOUTS";
export const RECEIVE_CHART_LIFTS = "RECEIVE_CHART_LIFTS";
// export const RECEIVE_SINGLE_CHART_EXERCISE = "RECEIVE_SINGLE_CHART_EXERCISE";
import { requestAllWorkouts, requestAllWorkoutExercises } from './prev_workout_actions';

export const receiveChartWorkouts = (workouts) => ({
  type: RECEIVE_CHART_WORKOUTS,
  workouts
});

export const receiveChartExercises = (exercises) => ({
  type: RECEIVE_CHART_LIFTS,
  exercises
});

// export const recieveSingleChartExercises = (exercises) => ({
//    type: RECEIVE_SINGLE_CHART_EXERCISE,
//    exercise
// });


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
        let array = [];
      Object.values(json).forEach(workout => array.push(workout.id));
      // Object.values(json).forEach(workout => dispatch(requestChartExercises(user_id, workout.id, auth_token)));
      dispatch(receiveChartWorkouts(array));
      // requestChartExercises gets the exerccies for that workout \
      // console.log(array);
      // console.log(json);
      },
      err => console.log("chart workouts json error", err),
    );
  }
}

// should be a single recieve Exercies
