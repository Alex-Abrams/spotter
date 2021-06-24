import { combineReducers } from 'redux';
//
// // import setsReducer from './sets_reducer';
// // import liftsReducer from './lifts_reducer';
import workoutReducer from './workout_reducer';
import usersReducer from './users_reducer';
import liftsReducer from './lifts_reducer';
import setsReducer from './sets_reducer';
import workoutSubmitReducer from './workout_submit_reducer';
import prevWorkoutReducer from './prev_workout_reducer';
import prevExercisesReducer from './prev_exercises_reducer';
//
const entitiesReducer = combineReducers({
  users: usersReducer,
  workout: workoutReducer,
  lifts: liftsReducer,
  sets: setsReducer,
  submit: workoutSubmitReducer,
  journal: prevWorkoutReducer,
  journal_exercises: prevExercisesReducer,
});

export default entitiesReducer;
