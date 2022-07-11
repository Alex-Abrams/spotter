import Settings from '../screens/settings/settings'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth_actions';
import * as userActions from '../actions/user_actions';
import * as journalActions from '../actions/prev_workout_actions';
import * as chartActions from '../actions/chart_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
