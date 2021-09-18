import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CalendarScreen from '../screens/calendar_screens/calendar_screen';
import * as chartActions from '../actions/chart_actions'; // Will be using the most of the same actions as the charts screens do
import { selectAllChartExercises } from './selectors';  // will be organizing the exercises store similar to chart screens

const mapStateToProps = state => ({
  current_user_id: Object.values(state.entities.users)[0].id,
  auth_token: state.authentication.auth_token,
  calendar_exercises: selectAllChartExercises(state), // changing the name of variable to calendar instead of chart
});

const mapDispatchToProps = dispatch => ({
  chartActions: bindActionCreators(chartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarScreen);
