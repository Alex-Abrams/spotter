import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Navigator
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation-stack';
import StackNavigatorContainer from './containers/stack_navigator_container';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import logger from 'redux-logger'
import authReducer from './reducers/auth_reducer'; //
import rootReducer from './reducers/root_reducer';
import LoginContainer from './containers/login_screen_container';
import Home from './screens/home_screen';

import FarStack from './containers/stack_navigator';


let store = null;

function configureStore(initialState = {}) {
  // Check to avoid multiple configured stores
  if (store) {
    return store;
  }
  const middlewares = [thunk, logger];

  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
}

let teststore = configureStore();


const App = () => {
  return (
    <Provider store={teststore}>
      <NavigationContainer>
        <StackNavigatorContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
