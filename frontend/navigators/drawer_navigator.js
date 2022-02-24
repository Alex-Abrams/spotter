import React, { Component } from 'react';
import { View } from 'react-native';
import { AsyncStorage } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

/// NEW ONE
import CalendarStackNavigator from './calendar_stack_navigator';
import JournalStackNavigator from './journal_stack_navigator';

import SelectWorkoutContainer from '../containers/select_workout_container';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';


/////
import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';
import SplashScreen from '../screens/splash_screen';
import TabNavigator from './tab_navigator';

const Drawer = createDrawerNavigator();

class DrawerNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  userLogout = async () => {
    try {
      let keys = ['token', 'email'];
      await AsyncStorage.multiRemove(keys);
      this.props.authActions.logoutCurrentUser();
    } catch (error) {
      // Error saving data
      // console.log("userLogout: ", error); //
      return null;
    }
  };

  ////////////////////
    // -------------------------------------------------------------------
  _retrieveStorageToken = async () => {
    try {
      const auth_token = await AsyncStorage.getItem('token');
      if (auth_token !== null) {
        this.props.authActions.receiveAuthToken({auth_token});
      } else {
        this.props.authActions.receiveAuthToken(null);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  // retrives the email from phone storage, email and auth_token is all you need to remain logged in
  _retrieveStorageEmail = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        this.props.authActions.requestEmail(value);
        // return value;
      } else {
        this.props.authActions.requestEmail(null);
      }

    } catch (error) {
      // Error retrieving data
    }
  };
  // -------------------------------------------------------------------

  componentDidMount() {
    this._retrieveStorageToken();
    this._retrieveStorageEmail();
    this.props.authActions.getUserInfo(this.props.email, this.props.auth_token);
  }
  ////////////////////

  render() {
    const { loggedIn, splash_screen } = this.props;

    return(
      <Drawer.Navigator initialRoute="Spotter" drawerContent={props => {
          return(
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={() => this.userLogout()} />
            </DrawerContentScrollView>
          )
        }}>
        {/*  just loggedin = true if you wanna delete later*/}
        {(loggedIn == true) ? (
          <>
          <Drawer.Screen name="Spotter" component={TabNavigator} navigation={this.props.navigation} />

          <Drawer.Screen name="WorkoutNav" options={{ drawerLabel: 'New Workout Entry' }} component={SelectWorkoutContainer} navigation={this.props.navigation} />
          <Drawer.Screen name="Journal" component={JournalStackNavigator} navigation={this.props.navigation} />
          <Drawer.Screen name="Progress Charts" component={ChartMenuScreenContainer} navigation={this.props.navigation} />
          <Drawer.Screen name="Calendar" component={CalendarStackNavigator} navigation={this.props.navigation} />
          </>
        ) : (
          <>
          <Drawer.Screen name="login" options={{headerShown: false, swipeEnabled: false}} component={LoginContainer} navigation={this.props.navigation} />
          <Drawer.Screen name="signup" options={{headerShown: false, swipeEnabled: false}} component={SignupContainer} navigation={this.props.navigation} />
          </>
        )}
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;
