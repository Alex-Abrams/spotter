import {
  RECEIVE_CURRENT_USER,
  RESET_USER }
from '../actions/user_actions';

import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });

    case RESET_USER:
      return {};
      
    default:
      return state;
  }
};

export default usersReducer;
