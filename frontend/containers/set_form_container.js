import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as workoutActions from '../actions/workout_actions';
import SetForm from '../screens/workout_forms/set_form';
import { selectAllLifts, selectAllSets, selectSetsPerLift } from './selectors';


const mapStateToProps = state => ({
  sets: selectAllSets(state),
});

const mapDispatchToProps = dispatch => ({
  workoutActions: bindActionCreators(workoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetForm);