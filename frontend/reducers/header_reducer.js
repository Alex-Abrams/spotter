import {
  RECEIVE_ELLIPSE_CLICK
} from '../actions/header_actions';

import merge from 'lodash/merge';

const _start_state = Object.freeze({
  header_modal: false,
});

const headerReducer = (state = _start_state, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ELLIPSE_CLICK:
      // thee action here (clicked) will always be a boolean
      return merge({}, state, {header_modal: action.clicked});
    default:
      return state;
  }
};

export default headerReducer;
