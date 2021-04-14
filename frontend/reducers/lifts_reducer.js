import {
  RECEIVE_LIFT
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const liftsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LIFT:
      // return merge({}, state, action.lift);
      //   // the id for action.lift.id will be generated for store use only
      //   // this id will not be POSTed to the backend
       // {workout_id: 3, type: "chest", name: "bench press", weight: 150, reps: 12, sets: 3}
       return merge({}, state, { [action.lift.id]: action.lift });
    default:
      return state;
  }
};

export default liftsReducer;
