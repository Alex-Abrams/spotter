import {
  RECEIVE_LIFTS_AND_SETS,
  RESET_LIFTS_AND_SETS
} from '../actions/workout_submit_actions';

import merge from 'lodash/merge';

const _nullSubmit = Object.freeze({
  liftsAndSets: null,
});

const workoutSubmitReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LIFTS_AND_SETS:
      return merge({}, state, {liftsAndSets: action.liftsAndSets});

    case RESET_LIFTS_AND_SETS:
      return _nullSubmit;
    default:
      return state;
  }
};

export default workoutSubmitReducer;
