import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chartActions from '../actions/chart_actions';
import SelectedDate from '../screens/calendar_screens/selected_date_screen';
import * as prevWorkoutActions from '../actions/prev_workout_actions';
import { selectAllChartExercises, selectAllWorkouts } from './selectors';
// revist these imports later to see if they are needed

const mapStateToProps = state => ({
  current_user_id: Object.values(state.entities.users)[0].id,
  auth_token: state.authentication.auth_token,
  calendar_exercises: selectAllChartExercises(state), // changing the name of variable to calendar instead of chart // also delete later
  all_workouts: selectAllWorkouts(state)
});

const mapDispatchToProps = dispatch => ({
  chartActions: bindActionCreators(chartActions, dispatch),
  prevWorkoutActions: bindActionCreators(prevWorkoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedDate);
