export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES";
export const RECEIVE_COPIED_WORKOUT = "RECEIVE_COPIED_WORKOUT";
export const RESET_JOURNAL_EXERCISES = "RESET_JOURNAL_EXERCISES";
export const RESET_COPIED_JOURNAL_EXERCISES = 'RESET_COPIED_JOURNAL_EXERCISES';
export const RESET_WORKOUTS ='RESET_WORKOUTS';
import {loadingComplete} from './loading_actions';

import { HOST } from '../environment';  // boolean, if true HOST = emulator IP, if flase = phone IP

export const receiveAllWorkouts = (workouts) => ({
  type: RECEIVE_ALL_WORKOUTS,
  workouts
});

export const receiveExercises = (exercises) => ({
  type: RECEIVE_EXERCISES,
  exercises
});

export const receiveCopiedWorkout = (workout) => ({  // this will an object of serveral exercises, ie: exercise section, name)
  type: RECEIVE_COPIED_WORKOUT,
  workout
});

export const resetJournalExercises = () => ({
  type: RESET_JOURNAL_EXERCISES,
});

export const resetCopiedJournalExercises = () => ({
  type: RESET_COPIED_JOURNAL_EXERCISES,
});

export const resetWorkouts = () => ({
  type: RESET_WORKOUTS,
});

// /users/:user_id/workouts
export function requestAllWorkouts(user_id, auth_token) {
  return function action(dispatch) {
    const request = fetch(`${HOST}/users/${user_id}/workouts`, {
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
    const request = fetch(`${HOST}/users/${user_id}/workouts/${workout_id}/lifts`, {
      method: 'GET',
        headers: {
          "Authorization": auth_token
        }
    });

    return request.then(
      response => response.json(),
      // response => console.log('response', response.json()),
      err => console.log("top requestAllWorkoutExercises error", err),
    )
    .then(
      json => dispatch(receiveExercises(json)),
      // json => console.log('just json12?!?!', json),
      err => console.log("bottom requestAllWorkoutExercises", err),
    )
    .then(() => dispatch(loadingComplete()));
  }
}
