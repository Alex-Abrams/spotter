import {
  RECEIVE_CHART_WORKOUTS,
  RECEIVE_CHART_LIFTS,
  // RECEIVE_SINGLE_CHART_EXERCISE
} from '../actions/chart_actions';

import merge from 'lodash/merge';

const chartsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    // case RECEIVE_SINGLE_CHART_EXERCISE:
    //   return merge({}, state, { [action.exercise.id]: action.exercise })
    case RECEIVE_CHART_WORKOUTS:
      return merge({}, state, action.workouts);
    case RECEIVE_CHART_LIFTS:
      return merge({}, state, action.exercises);
    default:
      return state;
  }
};

export default chartsReducer;
