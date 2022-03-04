import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SelectWorkout from '../screens/workout_screens/select_workout';
import * as workoutActions from '../actions/workout_actions';
import * as authActions from '../actions/auth_actions';

const mapStateToProps = state => ({
  current_user: Object.values(state.entities.users)[0],
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectWorkout);
