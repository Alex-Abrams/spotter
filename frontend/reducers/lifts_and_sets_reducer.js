import {
  RECEIVE_SET,
  RESET_SETS
} from '../actions/workout_actions';

import {
  RECEIVE_LIFT,
  RESET_LIFTS,
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const _null_lifts_and_sets = Object.freeze({
  lifts: null,
  sets: null,
});

const liftsAndSetsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SET:
      // return merge({}, state, action.set);
      return merge({}, state, { sets: action.set });
      // return merge({}, state, { sets: action.set });
    case RESET_SETS:
      return _null_lifts_and_sets;

    case RECEIVE_LIFT:
        //   // the id for action.lift.id will be generated for store use only
        //   // this id will not be POSTed to the backend
         // {workout_id: 3, type: "chest", name: "bench press", weight: 150, reps: 12, sets: 3}
      return merge({}, state, { lifts: action.lift });
         // return merge({}, state, { lifts: action.lift });
    case RESET_LIFTS:
      return _null_lifts_and_sets;

    default:
      return state;
  }
};

export default liftsAndSetsReducer;
