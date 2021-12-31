import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';
import * as prevWorkoutActions from '../actions/prev_workout_actions.js';
import * as chartActions from '../actions/chart_actions';
import HomeWelcomeScreen from '../screens/home_welcome_screen';
import { selectAllChartExercises } from './selectors';

const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
  email: state.authentication.email,
  auth_token: state.authentication.auth_token,
  all_exercises: selectAllChartExercises(state),
  current_user: Object.values(state.entities.users)[0],
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
