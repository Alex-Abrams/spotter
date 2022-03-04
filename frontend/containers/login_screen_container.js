import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../screens/login_signup_screens/login_screen';
import * as authActions from '../actions/auth_actions';

const mapStateToProps = state => ({
  auth_token: state.authentication.auth_token,
  splash_screen: state.authentication.splash_screen,
  error: state.authentication.error,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
