import {
  RECEIVE_CHART_WORKOUTS,
  RECEIVE_CHART_LIFTS,
  RESET_CHART_EXERCISES,
} from '../actions/chart_actions';

import merge from 'lodash/merge';

const chartsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHART_LIFTS:
      return merge({}, state, action.exercises);
    case RESET_CHART_EXERCISES:
      return {};
    default:
      return state;
  }
};

export default chartsReducer;
