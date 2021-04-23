import {
  RECEIVE_SET
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const setsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SET:
      return merge({}, state, action.set);
    default:
      return state;
  }
};

export default setsReducer;
