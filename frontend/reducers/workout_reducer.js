import {
  RECEIVE_LIFT,
  RECEIVE_WORKOUT,
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_WORKOUT:
      return merge({}, state, { [action.workout.type]: action.workout });

    case RECEIVE_LIFT:
      // the id for action.lift.id will be generated for store use only
      // this id will not be POSTed to the backend 
      return merge({}, state, { [action.lift.id]: action.lift });

    //case for edit lift
    //case for delet lift
    default:
      return state;
  }
};

export default workoutReducer;
