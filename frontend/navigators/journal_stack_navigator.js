import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExercisesListContainer from '../containers/exercises_list_container';
import PrevWorkoutScreenContainer from '../containers/prev_workout_screen_container';


class JournalStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator>
        <Stack.Screen name="Journal" component={PrevWorkoutScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name="Workout's Exercises" component={ExercisesListContainer} options={({ route }) => ({ title: route.params.name })} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}

export default JournalStackNavigator;
