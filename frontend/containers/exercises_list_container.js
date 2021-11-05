import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExercisesList from '../screens/prev_workout_screens/exercises_list';
import * as prevWorkoutActions from '../actions/prev_workout_actions';
import * as workoutActions from '../actions/workout_actions';
import { selectAllPrevExercises } from './selectors';

const mapStateToProps = state => ({
  journal_exercises: selectAllPrevExercises(state),
  auth_token: state.authentication.auth_token,
  current_user: Object.values(state.entities.users)[0],
});

const mapDispatchToProps = dispatch => ({
  prevWorkoutActions: bindActionCreators(prevWorkoutActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExercisesList);
