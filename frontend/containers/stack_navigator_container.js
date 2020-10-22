import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FarStack from './stack_navigator';
import * as authActions from '../actions/auth_actions';

const mapStateToProps = state => ({
  // auth_token: state.auth_token,
  auth_token: state.authentication.auth_token,
  // loggedIn: state.loggedIn,
  loggedIn: state.authentication.loggedIn,
  // splash_screen: state.splash_screen,
  splash_screen: state.authentication.splash_screen,
  // email: state.email,
  email: state.authentication.email,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FarStack);
