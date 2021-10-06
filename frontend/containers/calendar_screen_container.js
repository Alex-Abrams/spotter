import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CalendarScreen from '../screens/calendar_screens/calendar_screen';
import * as chartActions from '../actions/chart_actions'; // Will be using the most of the same actions as the charts screens do
import * as prevWorkoutActions from '../actions/prev_workout_actions';
import { selectAllChartExercises, selectAllWorkouts } from './selectors';  // will be organizing the exercises store similar to chart screens

const mapStateToProps = state => ({
  current_user_id: Object.values(state.entities.users)[0].id,
  auth_token: state.authentication.auth_token,
  calendar_exercises: selectAllChartExercises(state), // changing the name of variable to calendar instead of chart
  all_workouts: selectAllWorkouts(state),  // from the journal store entity
});

const mapDispatchToProps = dispatch => ({
  chartActions: bindActionCreators(chartActions, dispatch),
  prevWorkoutActions: bindActionCreators(prevWorkoutActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarScreen);
