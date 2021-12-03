import {
  RECEIVE_EXERCISES,
  RESET_JOURNAL_EXERCISES,
} from '../actions/prev_workout_actions';

import merge from 'lodash/merge';

const prevExercisesReducer = (state ={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_EXERCISES:
      return merge({}, state, action.exercises);

    case RESET_JOURNAL_EXERCISES:
      return {};
    default:
      return state;
  }
};

export default prevExercisesReducer;
