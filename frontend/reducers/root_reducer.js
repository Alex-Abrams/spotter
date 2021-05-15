import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import errorsReducer from './errors_reducer';
import authReducer from './auth_reducer';
import { CLEAR_ALL_LIFTS_AND_SETS } from '../actions/workout_submit_actions';
import merge from 'lodash/merge';

const appReducer = combineReducers({ // was root
  authentication: authReducer,
  entities: entitiesReducer,
});

// export default rootReducer;


// const rootReducer = (state ={}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     case CLEAR_ALL_LIFTS_AND_SETS:
//       return merge({}, state, {entities.lifts: null, entities.sets: null});
//     default:
//       return state;
//   }
// };

const rootReducer = (state, action) => {
  if (action.type === CLEAR_ALL_LIFTS_AND_SETS) {
    return merge({}, state, {lifts: null, sets: null});
  }
  return appReducer(state, action);
};

export default rootReducer;
