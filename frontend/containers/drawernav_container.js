import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DrawerNav from '../navigators/sidebar_drawer_navigator';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';

// const mapStateToProps = state => ({
//   // loggedIn: state.authentication.loggedIn,
//   // email: state.authentication.email,
//   // // email: state.entities.users.email,
//   // auth_token: state.authentication.auth_token
// });

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(DrawerNav);
