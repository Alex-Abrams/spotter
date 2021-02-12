import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { AsyncStorage, Navigator } from 'react-native';

import {WorkoutForm} from '../screens/workout_forms/workout_form';

class WorkoutNav extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const Stack = createStackNavigator();
    console.log("in workoutNav ", this.props.route.params.screen);

    let screenName = this.props.route.params.screen;

    return(
      <Stack.Navigator>
        <Stack.Screen name={`${screenName}`} bodyPartName={screenName} component={WorkoutForm} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}


export default WorkoutNav;
