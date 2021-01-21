import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { AsyncStorage, Navigator } from 'react-native';
import WorkoutForm from '../screens/workout_forms/workout_form';
import {ChestWorkoutForm} from '../screens/workout_forms/chest_workout_form';

class WorkoutNav extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const Stack = createStackNavigator();

    return(
      <Stack.Navigator>
        <Stack.Screen name="Chest" component={ChestWorkoutForm} navigation={this.props.navigation} />
        <Stack.Screen name="Legs" component={WorkoutForm} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}


export default WorkoutNav;
