import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DrawerNavigator from '../navigators/drawer_navigator';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';

const mapStateToProps = state => ({
  auth_token: state.authentication.auth_token,
  loggedIn: state.authentication.loggedIn,
  splash_screen: state.authentication.splash_screen,
  email: state.authentication.email,
});


const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerNavigator);
