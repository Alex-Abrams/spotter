import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PrevWorkoutScreen from '../screens/prev_workout_screens/prev_workout_screen';
import { selectAllWorkouts } from './selectors';

import * as prevWorkoutActions from '../actions/prev_workout_actions';

const mapStateToProps = state => ({
  auth_token: state.authentication.auth_token,
  current_user: Object.values(state.entities.users)[0],
  workouts_list: selectAllWorkouts(state),
  // workouts selector after testing is done
});

const mapDispatchToProps = dispatch => ({
  prevWorkoutActions: bindActionCreators(prevWorkoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevWorkoutScreen);
