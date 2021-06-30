import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import LegsScreenContainer from './legs_screen_container';
import ChestScreenContainer from './chest_screen_container';
import ArmsScreenContainer from './arms_screen_container';
import BackScreenContainer from './back_screen_container';
import ShouldersScreenContainer from './shoulders_screen_container';

class WorkoutNav extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const Stack = createStackNavigator();

    let screenName = this.props.route.params.screen;

    return(
      <Stack.Navigator>
        <Stack.Screen name={'Chest'} component={ChestScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={`Legs`} component={LegsScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Shoulders'} component={ShouldersScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Back'} component={BackScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Arms'} component={ArmsScreenContainer} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}


export default WorkoutNav;
