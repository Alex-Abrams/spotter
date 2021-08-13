import {
  RECEIVE_SET,
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

    case RESET_SETS:
      return {};

    case EDIT_SET:
      return merge({}, state, { [action.set.id]: action.set });

    case DELETE_SET:
      const set_id = action.set_id;

      // return { sets: state.sets.filter((set) => {
      //   set.id !== set_id
      // })};
      console.log("objectentires", Object.entries(state));
      console.log("objectentires[0].id", Object.entries(state)[0].id); // undefined
      console.log("objectentires[0]", Object.entries(state)[0]); // works, so something going on withh
      // console.log("objectentires", Object.entries(state));
      // console.log("objectentires", Object.entries(state));

      const testEntries = Object.entries(state).filter((set) => { // curently deletes all the sets
        set.id !== set_id
      });

      console.log("testentires", testEntries); // comes up as  []


    default:
      return state;
  }
};

export default setsReducer;
