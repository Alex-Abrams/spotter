import {
  RECEIVE_LIFT,
  RECEIVE_WORKOUT,
} from '../actions/workout_actions';

import { combineReducers } from 'redux';

import merge from 'lodash/merge';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_WORKOUT:
      // return merge({}, state, { [action.workout.type]: action.workout });
      return merge({}, state, action.workout );
    default:
      return state;
  }
};

// const armsWorkoutReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     default:
//       return state;
//   }
// };
//
// const legsWorkoutReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     default:
//       return state;
//   }
// };
//
// const shouldersWorkoutReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     default:
//       return state;
//   }
// };
//
// const backWorkoutReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     default:
//       return state;
//   }
// };
//
// const chestWorkoutReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     default:
//       return state;
//   }
// };
//
// const workoutReducer = combineReducers({
//   arms: armsWorkoutReducer,
//   legs: legsWorkoutReducer,
//   shoulders: shouldersWorkoutReducer,
//   back: backWorkoutReducer,
//   chest: chestWorkoutReducer,
// });

export default workoutReducer;
