import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import screen name
// import actions
import { LegsScreen } from '../screens/workout_screens';
import * as authActions from '../actions/auth_actions';
import * as workoutActions from '../actions/workout_actions';
import { selectAllLifts, selectAllSets } from './selectors';
import * as submitActions from '../actions/workout_submit_actions';
// import WorkoutScreens from "../screens/workout_screens";

const mapStateToProps = state => ({
  // current_user_id: state.entities.users.id,
  // current_user_email: state.entities.users.email,
  current_user: Object.values(state.entities.users)[0],
  lifts: selectAllLifts(state),
  sets: selectAllSets(state),
  auth_token: state.authentication.auth_token,
  workout: state.entities.workout,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch),
  submitActions: bindActionCreators(submitActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LegsScreen);
