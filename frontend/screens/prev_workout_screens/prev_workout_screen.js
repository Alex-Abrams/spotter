import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';
import JournalItem from './journal_item';


class PrevWorkoutScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.prevWorkoutActions.requestAllWorkouts(this.props.current_user.id, this.props.auth_token);
  }

  render() {
    // console.log(this.props.workouts_list);
    // const days = ["Sun", "Mon", "Tues", "Thur", "Fri", "Sat"];
    // const dt = new Date("2021-05-16T18:46:31.571Z"); // works gives a numeral
    // console.log("getdatday", days[dt.getDay()]);

    const { auth_token, current_user, workouts_list } = this.props;

    const journal_list = (
      <View>
        {workouts_list.map((workout, i) =>
        <JournalItem
          key={i}
          user_id={current_user.id}
          workout_id={workout.id}
          auth_token={auth_token}
          created_at={workout.created_at}
          exercise_section={workout.exercise_section}/>)}
      </View>
    );

    return(
      <ScrollView>
        <View>
          {journal_list}
        </View>
    </ScrollView>

    )
  }
}

export default PrevWorkoutScreen;
