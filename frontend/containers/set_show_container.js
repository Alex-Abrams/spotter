import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as workoutActions from '../actions/workout_actions';
import SetShow from '../screens/workout_forms/set_show';
import { selectAllLifts, selectAllSets } from './selectors';

const mapStateToProps = state => ({
  lifts: selectAllLifts(state),
  sets: selectAllSets(state),
});

const mapDispatchToProps = dispatch => ({
  workoutActions: bindActionCreators(workoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetShow);
