import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SelectWorkout from '../screens/select_workout';
import * as workoutActions from '../actions/workout_actions';
import * as authActions from '../actions/auth_actions';

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
)(SelectWorkout);
