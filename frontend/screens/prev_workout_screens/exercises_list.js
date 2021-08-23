import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';
import ExerciseItem from './exercise_item';

// this is to display every excercise for a workout when tapped from "prev_workout_screen"

class ExercisesList extends React.Component {
  constructor(props) {
    super(props);

  }

  // now this jst needs all the displayed information and a mount
  // this works just need to get the actual display stuff going
  // whille this is good to go

  componentDidMount() {
    const { auth_token } = this.props;
    const { workout_id, user_id } = this.props.route.params;
    this.props.prevWorkoutActions.requestAllWorkoutExercises(user_id, workout_id, auth_token); // requests exercises for this workout
  }



  render() {
    const { auth_token, journal_exercises } = this.props;
    const { workout_id, user_id, the_day, the_date } = this.props.route.params;

    const list_exercises = (
      <View>
        {journal_exercises.map((exercise, i) =>
        <ExerciseItem
          key={i}
          name={exercise.name}
          weight={exercise.weight}
          reps={exercise.reps}
        />)}
      </View>
    );

    return(
      <View>
        {list_exercises}
      </View>
    );
  }
}

export default ExercisesList;
