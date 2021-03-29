import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import screen name
// import actions
import {LegsScreen} from '../screens/workout_screens';
import * as authActions from '../actions/auth_actions';
import * as workoutActions from '../actions/workout_actions';
// import WorkoutScreens from "../screens/workout_screens";

const mapStateToProps = state => ({
  current_user_id: state.entities.users.id,
  current_user_email: state.entities.users.email,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LegsScreen);
