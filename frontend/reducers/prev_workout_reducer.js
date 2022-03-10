import {
  RECEIVE_ALL_WORKOUTS,
  RESET_WORKOUTS,
} from '../actions/prev_workout_actions';

import merge from 'lodash/merge';

const prevWorkoutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_WORKOUTS:
      return merge({}, state, action.workouts);
    // case RECEIVE_WORKOUT_LIFTS:
    case RESET_WORKOUTS:
      return {};
    default:
      return state;
  }
};

export default prevWorkoutReducer;
