import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

// import { requestAllWorkouts } from '../../actions/prev_workout_actions';

class PrevWorkoutScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  testRequestButton() {
    const { auth_token, current_user } = this.props;
    return(
      <View>
        <Button
          title="Test Request Workouts"
          onPress={() => {this.props.prevWorkoutActions.requestAllWorkouts(current_user.id, auth_token)}}>
        </Button>
      </View>
    )
  }

  render() {
    // console.log(this.props.workouts_list);
    const days = ["Sun", "Mon", "Tues", "Thur", "Fri", "Sat"];
    const dt = new Date("2021-05-16T18:46:31.571Z"); // works gives a numeral
    console.log("getdatday", days[dt.getDay()]);
    return(
      <View>
      <Text>this is the previous workoutscreen ayyy</Text>
      {this.testRequestButton()}
      </View>

    )
  }
}

export default PrevWorkoutScreen;
