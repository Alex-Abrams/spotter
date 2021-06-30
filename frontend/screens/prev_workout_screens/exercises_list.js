import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';

class ExercisesList extends React.Component {
  constructor(props) {
    super(props);

  }

  // now this jst needs all the displayed information and a mount
  // this works just need to get the actual display stuff going
  // whille this is good to go


  render() {
    const { auth_token } = this.props;
    const { workout_id, user_id } = this.props.route.params;

    // console.log("auth_token ", auth_token);
    console.log("params user_id", user_id); // == {workout_id: 2, user_id: "fart"}
    console.log("params workout_id", workout_id);
    // requestAllWorkoutExercises(user_id, workout_id, auth_token)
    // console.log
    return(
      <View>
        <Text>exerciess list ay</Text>
          <Button
            raised
            title={"hello"}
            onPress={() => this.props.prevWorkoutActions.requestAllWorkoutExercises(user_id, workout_id, auth_token)}
            ></Button>
      </View>
    );
  }
}

export default ExercisesList;
