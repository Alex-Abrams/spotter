import 'react-native-gesture-handler';

import React, { Component, createRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Navigator
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import logger from 'redux-logger';
import authReducer from './reducers/auth_reducer'; //
import rootReducer from './reducers/root_reducer';

import SplashScreen from './screens/login_signup_screens/splash_screen';

//
import DrawerScreenNavigatorContainer from './containers/drawer_screen_navigator_container';
import BottomTabNavigatorContainer from './containers/tab_screen_container';


import * as Font from 'expo-font';

let store = null;

function configureStore(initialState = {}) {
  // Check to avoid multiple configured stores
  if (store) {
    return store;
  }
  const middlewares = [thunk, logger];
  // const middlewares = [thunk];

  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
}

let app_store = configureStore();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsAreLoaded: false,
    };
  };


  async componentDidMount() {  // retrieves the fonts and icons from fonts folders before app loads
    try {
      await Font.loadAsync({
        'SimpleLineIcons': require('./android/app/src/main/assets/fonts/SimpleLineIcons.ttf'),
        'EvilIcons': require('./android/app/src/main/assets/fonts/EvilIcons.ttf'),
        'FontAwesome': require('./android/app/src/main/assets/fonts/FontAwesome.ttf'),
        'MaterialCommunityIcons': require('./android/app/src/main/assets/fonts/MaterialCommunityIcons.ttf'),
      });
      this.setState({ fontsAreLoaded: true });
    } catch(error) {
      console.log("app.js componentDidMount error", error);
      return;
    }
  }

  render() {
    const { fontsAreLoaded } = this.state;

    if (!this.state.fontsAreLoaded) {  // splash screen is my loading screen, loads screen during font load
      return <SplashScreen />
    };

    const navigationRef = React.createRef();
    const nav = () => navigationRef.current;


    return (
      <Provider store={app_store}>
        <NavigationContainer ref={this.navigationRef}>
            <BottomTabNavigatorContainer navigation={this.props.navigation} />
        </NavigationContainer>
      </Provider>
    );
  }
};
