import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import JournalItem from './journal_item';

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

    const { auth_token, current_user, workouts_list } = this.props;

    const journal_list = (
      <View>
        {workouts_list.map((workout, i) =>
        <JournalItem
          key={i}
          user_id={current_user.id}
          auth_token={auth_token}
          created_at={workout.created_at}
          exercise_section={workout.exercise_section}/>)}
      </View>
    );

    return(
      <View>
      <Text>this is the previous workoutscreen ayyy</Text>
      {this.testRequestButton()}
      {journal_list}
      </View>

    )
  }
}

export default PrevWorkoutScreen;
