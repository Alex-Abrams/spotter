import {
  RECEIVE_SET,
  RESET_SETS,
  EDIT_SET,
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const setsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SET:
      return merge({}, state, { [action.set.id]: action.set });

    case RESET_SETS:
      return {};

    case EDIT_SET:
      console.log("zipperTTT[]");
      return merge({}, state, { [action.set.id]: action.set });
      // const editedSet =

    default:
      return state;
  }
};

export default setsReducer;
