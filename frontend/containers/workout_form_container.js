import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import screen name
// import actions
import * as workoutActions from '../actions/auth_actions';

const mapStateToProps = state => ({
  current_user_id: state.entities.users.id,
  current_user_email: state.entities.users.email,
});

const mapDispatchToProps = dispatch => ({
  workoutActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)();
