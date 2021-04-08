import React, { Component } from 'react';
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

import SplashScreen from './screens/splash_screen';  // loading screen
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as Font from 'expo-font';

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

// below works but cant actually get componentDidMount in there
//
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsAreLoaded: false,
    };
  };

  testyo() { // ? works but compondndtDidMount wont
    console.log("heyeye");
  };

  // async componentDidMount () {
  //   await Expo.Font.loadAsync({
  //       Ionicons: require('./android/src/main/fonts/Ionicons.ttf'),
  //   });
  // };

  // /android/app/src/main/assets/fonts/SimpleLineIcons.ttf

  async componentDidMount() {
    console.log("COPONENT DID MOUNT");
    try {
      await Font.loadAsync({
        // 'SimpleLineIcons': require('@expo/vector-icons/fonts/SimpleLineIcons.ttf'),
        'SimpleLineIcons': require('./android/app/src/main/assets/fonts/SimpleLineIcons.ttf'),
      });
      this.setState({ fontsAreLoaded: true });
    } catch(error) {
      console.log(error);
      return;
    }
  }

  render() {
    const { fontsAreLoaded } = this.state;
    return (
      <Provider store={teststore}>
        <NavigationContainer>
          <StackNavigatorContainer />
        </NavigationContainer>
      </Provider>
    );
  }
};

// const App = () => {
//   return (
//     <Provider store={teststore}>
//       <NavigationContainer>
//         <StackNavigatorContainer />
//       </NavigationContainer>
//     </Provider>
//   );
// };
//
// export default App;
