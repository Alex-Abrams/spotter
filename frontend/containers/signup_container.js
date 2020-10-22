import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Signup from '../screens/signup_screen';
import * as authActions from '../actions/auth_actions';

const mapStateToProps = state => ({
  // auth_token: state.auth_token,
  auth_token: state.authentication.auth_token,
  // splash_screen: state.splash_screen,
  splash_screen: state.authentication.splash_screen,
  // error: state.error,
  error: state.authentication.error,
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
