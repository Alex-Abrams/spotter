import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BottomTabNavigator from '../app_navigators/drawer_screen_navigator';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';
import * as journalActions from '../actions/prev_workout_actions';
import * as chartActions from '../actions/chart_actions';

const mapStateToProps = state => ({
  auth_token: state.authentication.auth_token,
  loggedIn: state.authentication.loggedIn,
  splash_screen: state.authentication.splash_screen,
  email: state.authentication.email, //CETU
  username: state.authentication.username, // CETU
});


const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
  journalActions: bindActionCreators(journalActions, dispatch),
  chartActions: bindActionCreators(chartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomTabNavigator);
