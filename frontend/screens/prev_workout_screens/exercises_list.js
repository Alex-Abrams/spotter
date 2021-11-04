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

  // const exercise_names = [];
  // display_exercises.forEach(exercise => { exercise_names.push(exercise.name)});
  //
  // const unique_exercise_names = [...new Set(exercise_names)];

  displayExercises() {
    const { journal_exercises } = this.props;
    const exercise_names = [];
    journal_exercises.forEach(exercise => { exercise_names.push(exercise.name)});

    const unique_exercise_names = [...new Set(exercise_names)];


    const arrays_by_titles = [];
    for(let i = 0; i < unique_exercise_names.length; i++) {
      let seperated_exercises = journal_exercises.filter(exercise => exercise.name === unique_exercise_names[i]);
      arrays_by_titles.push(seperated_exercises);
    }

    // <ExerciseItem key={i} sets={exercise} />
    const list_exercises = (
      <View>
        {arrays_by_titles.map((exercise, i) =>
          <View>
          <Text key={i + 100000} style={styles.exercise}>{unique_exercise_names[i]}</Text>
            <ExerciseItem key={i} sets={exercise}/>
        </View>
        )}
      </View>
    );

    return list_exercises;
  }


  render() {
    const { auth_token, journal_exercises } = this.props;
    const { workout_id, user_id, the_day, the_date } = this.props.route.params;
    // console.log('peepees', journal_exercises);
    // console.log('unique', this.displayExercises());


    return(
      <ScrollView>
        {this.displayExercises()}
      </ScrollView>
    );
  }
}

export default ExercisesList;

const styles = StyleSheet.create({
  title_view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#abe6ed', //
    width: '100%',

    marginBottom: 12,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    elevation: 5,

  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto',

  },
  exercise: {
    backgroundColor: "#7EE8F5",
    height: 34,
    fontSize: 27,
    paddingLeft: 12,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    elevation: 5,
  },
  sets: {
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 16,
    fontFamily: 'Roboto',
  }
});
