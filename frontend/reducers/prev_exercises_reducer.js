import {
  RECEIVE_EXERCISES,
} from '../actions/prev_workout_actions';

import merge from 'lodash/merge';

const prevExercisesReducer = (state ={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_EXERCISES:
      return merge({}, state, action.exercises);
    default:
      return state;
  }
};

export default prevExercisesReducer;
