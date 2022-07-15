import Settings from '../screens/settings/settings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectHeaderBoolean } from './selectors';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';
import * as journalActions from '../actions/prev_workout_actions';
import * as chartActions from '../actions/chart_actions';
import * as headerActions from '../actions/header_actions';

const mapStateToProps = state => ({
  email: state.authentication.email,
  username: state.authentication.username,
  header_modal: selectHeaderBoolean(state),
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
  journalActions: bindActionCreators(journalActions, dispatch),
  chartActions: bindActionCreators(chartActions, dispatch),
  headerActions: bindActionCreators(headerActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
