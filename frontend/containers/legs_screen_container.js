import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {LegsScreen} from '../screens/workout_screens/legs_screen';
import * as authActions from '../actions/auth_actions';
import * as workoutActions from '../actions/workout_actions';
import { selectAllLifts, selectAllSets } from './selectors';
import * as submitActions from '../actions/workout_submit_actions';


const mapStateToProps = state => ({

  current_user: Object.values(state.entities.users)[0],
  lifts: selectAllLifts(state),
  sets: selectAllSets(state),
  auth_token: state.authentication.auth_token,
  workout: state.entities.workout,
  liftsAndSets: state.entities.submit.liftsAndSets,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  workoutActions: bindActionCreators(workoutActions, dispatch),
  submitActions: bindActionCreators(submitActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LegsScreen);
