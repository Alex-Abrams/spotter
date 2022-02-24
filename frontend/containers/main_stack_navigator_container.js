import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainStackNavigator from '../navigators/main_stack_navigator';
import * as authActions from '../actions/auth_actions';

const mapStateToProps = state => ({
  auth_token: state.authentication.auth_token,
  loggedIn: state.authentication.loggedIn,
  splash_screen: state.authentication.splash_screen,
  email: state.authentication.email,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainStackNavigator);
