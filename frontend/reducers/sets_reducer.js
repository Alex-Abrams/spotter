import {
  RECEIVE_SET,
  RECEIVE_ALL_SETS,
  RESET_SETS,
  EDIT_SET,
  DELETE_SET,
} from '../actions/workout_actions';

import merge from 'lodash/merge';

const setsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SET:
      return merge({}, state, { [action.set.id]: action.set });

    case RECEIVE_ALL_SETS:
      return merge({}, state, action.sets);

    case RESET_SETS:
      return {};

    case EDIT_SET:
      return merge({}, state, { [action.set.id]: action.set });

    case DELETE_SET:
      const set_id = action.set_id;

      const testEntries = Object.entries(state).filter((set) => { // curently deletes all the sets
        set.id !== set_id
      });


    default:
      return state;
  }
};

export default setsReducer;
