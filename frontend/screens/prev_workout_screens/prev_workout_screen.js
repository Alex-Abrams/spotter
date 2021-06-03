import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

import { requestAllWorkouts } from '../../actions/prev_workout_actions';

class PrevWorkoutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  testRequestButton() {
    return(
      <View>
        <Button
          title="Test Request Workouts"
          onPress={() => {console.log("progress charts")}}>
        </Button>
      </View>
    )
  }

  render() {
    return(
      <View>
      <Text>this is the previous workoutscreen ayyy</Text>
      {this.testRequestButton()}
      </View>

    )
  }
}

export default PrevWorkoutScreen;
