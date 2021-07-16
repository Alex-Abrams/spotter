import {
  RECEIVE_SET,
  RESET_SETS
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const _nullSets = Object.freeze({
  sets: {},
});

const setsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SET:
      // return merge({}, state, action.set);
      // return merge({}, state, { [action.set.id]: action.set });
      return merge({}, state, { sets: action.set });
    case RESET_SETS:
      // console.log("HELLO FROM THE SETSREDUCER");
      return _nullSets;
      // return {
      //   ...state,
      // }

      // return merge({}, state.)
    default:
      return state;
  }
};

export default setsReducer;


// this fucking works just iron out the inks and do it for lifts reducer as well
