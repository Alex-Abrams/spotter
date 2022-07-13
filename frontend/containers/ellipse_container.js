import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ellipse from '../app_navigators/headers/verticle_ell';
import * as headerActions from '../actions/header_actions';
import { selectHeaderBoolean } from './selectors';

const mapStateToProps = state => ({
  header_modal: selectHeaderBoolean(state),
});

const mapDispatchToProps = dispatch => ({
  headerActions: bindActionCreators(headerActions, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ellipse);
