import { combineReducers } from 'redux';
//
// // import setsReducer from './sets_reducer';
// // import liftsReducer from './lifts_reducer';
// // import workoutsReducer from './workouts_reducer';
import usersReducer from './users_reducer';
//
const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;
