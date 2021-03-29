import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import { LegsScreen, ArmsScreen, BackScreen, ShouldersScreen, ChestScreen} from '../screens/workout_screens';

class WorkoutNav extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const Stack = createStackNavigator();

    let screenName = this.props.route.params.screen;

    return(
      <Stack.Navigator>
        <Stack.Screen name={'Chest'} component={ChestScreen} navigation={this.props.navigation} />
        <Stack.Screen name={`Legs`} component={LegsScreen} navigation={this.props.navigation} />
        <Stack.Screen name={'Shoulders'} component={ShouldersScreen} navigation={this.props.navigation} />
        <Stack.Screen name={'Back'} component={BackScreen} navigation={this.props.navigation} />
        <Stack.Screen name={'Arms'} component={ArmsScreen} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}


export default WorkoutNav;
