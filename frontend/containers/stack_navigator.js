
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { AsyncStorage, Navigator } from 'react-native';

import LoginContainer from './login_screen_container';
import HomeContainer from '../containers/home_container';
import SignupContainer from './signup_container';
import SplashScreen from '../screens/splash_screen';
import SelectWorkout from '../screens/select_workout'; // select workout body part
import SelectWorkoutContainer from './select_workout_container';
import WorkoutNav from './workout_navigator';
import PrevWorkoutScreenContainer from './prev_workout_screen_container';
import ExercisesListContainer from './exercises_list_container';
import ChartMenuScreenContainer from './chart_menu_screen_container';
import ChartScreenContainer from './chart_screen_container';
// import CalendarScreen from '../screens/calendar_screens/calendar_screen';
import CalendarScreenContainer from './calendar_screen_container';

import { receiveAuthToken, getThoseItems } from '../actions/auth_actions';

class FarStack extends React.Component {
  constructor(props) {
    super(props);
  }

  // -------------------------------------------------------------------
  // retireves the tolen store on the phone and sends it to the store
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
// above is for the stuff between the stack navigators....
// initialRouteName="login"
// colestoral is high,
// everything is high saturrted fats, brown rice, granola, vit d is low more sun, liver, heptitas A shot
// call them for it libierty, flu shot

  render() {
    const Stack = createStackNavigator();
    const { loggedIn, splash_screen } = this.props;

    return (
      <Stack.Navigator>

        {(loggedIn == true) ? (
          <>
          <Stack.Screen name="Home" component={HomeContainer} navigation={this.props.navigation} />
          <Stack.Screen name="Workouts" component={SelectWorkoutContainer} navigation={this.props.navigation} />
          {/* "Workouts" is the BodyParts List that when clicked on, directs to "one of the bodyparts from WorkoutNav" */}
          <Stack.Screen name="WorkoutNav" options={{headerShown: false}} component={WorkoutNav} navigation={this.props.navigation} />
          <Stack.Screen name="Previous Workouts" component={PrevWorkoutScreenContainer} navigation={this.props.navigation} />
          <Stack.Screen name="Previous Exercises" component={ExercisesListContainer} options={({ route }) => ({ title: route.params.name })} navigation={this.props.navigation} />
          <Stack.Screen name="Progress Charts" component={ChartMenuScreenContainer} navigation={this.props.navigation} />
          <Stack.Screen name="Calendar" component={CalendarScreenContainer} navigation={this.props.navigation} />
          </>
        ) : (
          <>
          <Stack.Screen name="login" component={LoginContainer} navigation={this.props.navigation} />
          <Stack.Screen name="signup" component={SignupContainer} navigation={this.props.navigation} />
          </>
          )}

      </Stack.Navigator>
    );
  }
}

export default FarStack;
