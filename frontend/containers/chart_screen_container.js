import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChartScreen from '../screens/chart_screens/chart_screen';
import * as chartActions from '../actions/chart_actions';
import { selectAllChartExercises } from './selectors';

const mapStateToProps = state  => ({
  current_user_id: Object.values(state.entities.users)[0].id,
  auth_token: state.authentication.auth_token,
  chart_exercises: selectAllChartExercises(state),
});

const mapDispatchToProps = dispatch => ({
  chartActions: bindActionCreators(chartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartScreen);
