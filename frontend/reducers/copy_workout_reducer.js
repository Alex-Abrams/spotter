// this reducer is for the button on exercises list that will copy the names of each exercise when pressed
// when they go to new workout, they will be able to paste the copied exercises with another buton if they have matching sections (legs, arms, etc)
import {
  RECEIVE_COPIED_WORKOUT,
  RESET_COPIED_JOURNAL_EXERCISES,
} from '../actions/prev_workout_actions';

import merge from 'lodash/merge';

const copyWorkoutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COPIED_WORKOUT:
      return merge({}, state, action.workout);

    case RESET_COPIED_JOURNAL_EXERCISES:
      return {};
      
    default:
      return state;
  }
};

export default copyWorkoutReducer;
