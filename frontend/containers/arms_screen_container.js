import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArmsScreen from '../screens/workout_screens';
import * as authActions from '../actions/auth_actios';
import * as workoutActions from '../actions/worout_actions';

const mapStateToProps = state => ({
  current_user_id: state.entities.users.id,
  current_user_email: state.entitites.email
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArmsScreen);
