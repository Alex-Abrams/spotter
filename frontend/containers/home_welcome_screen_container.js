import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';
import * as prevWorkoutActions from '../actions/prev_workout_actions.js';
import * as chartActions from '../actions/chart_actions';
import HomeWelcomeScreen from '../screens/home_screens/home_welcome_screen';
import { selectAllChartExercises, selectMostRecentWorkout, selectAllPrevExercises } from './selectors';

const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  email: state.authentication.email,
  auth_token: state.authentication.auth_token,
  all_exercises: selectAllChartExercises(state),
  current_user: Object.values(state.entities.users)[0],
  most_recent_workout_id: selectMostRecentWorkout(state), // this will give us the last workout to display on home page
  last_workout: selectAllPrevExercises(state),  // the exercises associated with the above workout id, (most_recent_workout_id)
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
  prevWorkoutActions: bindActionCreators(prevWorkoutActions, dispatch),
  fetchAllExercises: bindActionCreators(chartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWelcomeScreen);
