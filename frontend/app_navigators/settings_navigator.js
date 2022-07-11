import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsContainer from '../containers/settings_container';

class SettingsNavigator extends React.Compoent {
  constructor(props) {
    super(props);
  }


  render() {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator>
        <Stack.Screen name="Journal" component={PrevWorkoutScreenContainer} options={{headerShown: true}} navigation={this.props.navigation} />
        <Stack.Screen name="Workout's Exercises" component={ExercisesListContainer} options={({ route }) => ({ title: route.params.name })} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}

export default SettingsNavigator;
