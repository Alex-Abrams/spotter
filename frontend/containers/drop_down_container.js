import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WorkoutDropdownSearch from '../screens/workout_forms/workout_lift_searchbar/wo_dropdown_search';
import * as workoutActions from '../actions/workout_actions';
import { selectAllLifts } from './selectors';

const mapStateToProps = state => ({
  lifts: selectAllLifts(state),
});

const mapDispatchToProps = dispatch => ({
  workoutActions: bindActionCreators(workoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutDropdownSearch);
