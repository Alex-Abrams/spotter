// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
// import { Navigator } from 'react-native';

import LegsScreenContainer from '../containers/legs_screen_container';
import ChestScreenContainer from '../containers/chest_screen_container';
import ArmsScreenContainer from '../containers/arms_screen_container';
import BackScreenContainer from '../containers/back_screen_container';
import ShouldersScreenContainer from '../containers/shoulders_screen_container';

class WorkoutNavigator extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const Stack = createStackNavigator();

    return(
      <Stack.Navigator>
        <Stack.Screen name={'Chest'} component={ChestScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Legs'} component={LegsScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Shoulders'} component={ShouldersScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Back'} component={BackScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name={'Arms'} component={ArmsScreenContainer} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}


export default WorkoutNavigator;
