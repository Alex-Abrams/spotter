import {
  LOADING_SCREEN,
  LOADING_COMPLETE,
} from '../actions/loading_actions';

import merge from 'lodash/merge';


const loadingScreenReducer = (state = { is_loading: false }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case LOADING_SCREEN:
      return merge({}, state, { is_loading: true });
    case LOADING_COMPLETE:
      return merge({}, state, { is_loading: false });
    default:
      return state;
  }
};

export default loadingScreenReducer;
