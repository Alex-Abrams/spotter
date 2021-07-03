import {
  RECEIVE_LIFT,
  RECEIVE_WORKOUT,
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_WORKOUT:
      // return merge({}, state, { [action.workout.type]: action.workout });
      return merge({}, state, action.workout );
    default:
      return state;
  }
};

export default workoutReducer;
