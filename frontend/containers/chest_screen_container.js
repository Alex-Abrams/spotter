import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {ChestScreen} from '../screens/workout_screens';
import * as authActions from '../actions/auth_actions';
import * as workoutActions from '../actions/workout_actions';

const mapStateToProps = state => ({
  current_user_id: state.entities.users_id,
  current_user_email: state.entities.users.email,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChestScreen);
