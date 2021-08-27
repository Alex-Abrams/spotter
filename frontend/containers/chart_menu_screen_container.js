import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChartMenuScreen from '../screens/chart_screens/chart_menu_screen';
import * as chartActions from '../actions/chart_actions';

const mapStateToProps = state  => ({
  current_user_id: Object.values(state.entities.users)[0].id,
  auth_token: state.authentication.auth_token,
});

const mapDispatchToProps = dispatch => ({
  chartActions: bindActionCreators(chartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartMenuScreen);
