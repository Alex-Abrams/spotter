import { combineReducers } from 'redux';

import workoutReducer from './workout_reducer';
import usersReducer from './users_reducer';
import liftsReducer from './lifts_reducer';
import setsReducer from './sets_reducer';
import workoutSubmitReducer from './workout_submit_reducer';
import prevWorkoutReducer from './prev_workout_reducer';
import prevExercisesReducer from './prev_exercises_reducer';
import chartsReducer from './charts_reducer';
import copyWorkoutReducer from './copy_workout_reducer';
import loadingScreenReducer from './loading_reducer';
import headerReducer from './header_reducer';

//
const entitiesReducer = combineReducers({
  users: usersReducer,
  workout: workoutReducer,
  lifts: liftsReducer,
  sets: setsReducer,
  submit: workoutSubmitReducer,
  journal: prevWorkoutReducer,
  journal_exercises: prevExercisesReducer,
  chart_exercises: chartsReducer,
  copied_workout: copyWorkoutReducer,
  loading: loadingScreenReducer,
  header: headerReducer,
});

export default entitiesReducer;
