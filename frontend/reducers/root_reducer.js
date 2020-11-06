import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import errorsReducer from './errors_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  entities: entitiesReducer,
});

export default rootReducer;
