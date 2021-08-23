export const RECEIVE_CHART_WORKOUTS = "RECEIVE_CHART_WORKOUTS";
export const RECEIVE_CHART_LIFTS = "RECEIVE_CHART_LIFTS";
import { requestAllWorkouts, requestAllWorkoutExercises } from './prev_workout_actions';

export const receiveChartWorkouts = (workouts) => ({
  type: RECEIVE_CHART_WORKOUTS,
  workouts
});

export const receiveChartLifts = (lifts) => ({
  type: RECEIVE_CHART_LIFTS,
  lifts
});

// 
// export function requestAllWorkouts(user_id, auth_token)
// export function requestAllWorkoutExercises(user_id, workout_id, auth_token)
