import { combineReducers } from 'redux';
//
// // import setsReducer from './sets_reducer';
// // import liftsReducer from './lifts_reducer';
import workoutReducer from './workout_reducer';
import usersReducer from './users_reducer';
import liftsReducer from './lifts_reducer';
//
const entitiesReducer = combineReducers({
  users: usersReducer,
  workout: workoutReducer,
  lifts: liftsReducer,
});

export default entitiesReducer;
