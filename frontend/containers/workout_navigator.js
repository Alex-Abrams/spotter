import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { AsyncStorage, Navigator } from 'react-native';

import {WorkoutForm} from '../screens/workout_forms/workout_form';

import MainWorkoutForm from '../screens/main_workout_screen';
import { LegsScreen, ArmsScreen, BackScreen, ShouldersScreen, ChestScreen} from '../screens/workout_screens';

class WorkoutNav extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const Stack = createStackNavigator();
    // console.log("in workoutNav ", this.props.route.params.screen);

    let screenName = this.props.route.params.screen;
    // <Stack.Screen name={`${screenName}`} component={WorkoutForm} navigation={this.props.navigation} />
    // <Stack.Screen name={`${screenName}`} component={MainWorkoutForm} navigation={this.props.navigation} />

    return(
      <Stack.Navigator>
        <Stack.Screen name={'Chest'} component={WorkoutForm} navigation={this.props.navigation} />
        <Stack.Screen name={`Legs`} component={LegsScreen} navigation={this.props.navigation} />
        <Stack.Screen name={'Shoulders'} component={ShouldersScreen} navigation={this.props.navigation} />
        <Stack.Screen name={'Back'} component={BackScreen} navigation={this.props.navigation} />
        <Stack.Screen name={'Arms'} component={ArmsScreen} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}


export default WorkoutNav;
