import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';
import ExerciseItem from './exercise_item';

// this is to display every excercise for a workout when tapped from "prev_workout_screen"
// search copy button
class ExercisesList extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      button_pressed: false,

    };

  }


  componentDidMount() {
    const { auth_token } = this.props;
    const { workout_id, user_id } = this.props.route.params;
    this.props.prevWorkoutActions.resetJournalExercises();
    this.props.prevWorkoutActions.requestAllWorkoutExercises(user_id, workout_id, auth_token); // requests exercises for this workout
  }


  startTimer() { // when the copy workout button is pressed, it will change its title to 'Copied!', then revert back after 10 seconds
    this.setState({ button_pressed: true });
    setTimeout(() => {this.setState({ button_pressed: false })}, 1300);
  }

  componentWillUnmount() {
    clearTimeout();
  }

  displayExercises() {
    const { journal_exercises } = this.props;
    const exercise_names = [];
    journal_exercises.forEach(exercise => { exercise_names.push(exercise.name)}); // get all the exercise names ie 'Bench Press'

    const unique_exercise_names = [...new Set(exercise_names)]; // create a unique array of the exercise names

    const arrays_by_titles = []; // each exercise will be push here according to name for an array of arrays [[bench press exercises], [chest dips exercises], [etc]]
    for(let i = 0; i < unique_exercise_names.length; i++) {
      let seperated_exercises = journal_exercises.filter(exercise => exercise.name === unique_exercise_names[i]); // seperate the exercises by names, and push into an array
      arrays_by_titles.push(seperated_exercises);
    }



    const list_exercises = ( // each exercise name is the blue title, the exercise item is that exercises list of sets
      <View>
        {arrays_by_titles.map((exercise, i) =>
          <View key={i + 1000000}>
          <Text key={i + 100000} style={styles.exercise}>{unique_exercise_names[i]}</Text>
            <ExerciseItem key={i} sets={exercise}/>
        </View>
        )}
      </View>
    );

    return list_exercises;
  }

  copyWorkoutData() {
    // this function forms an array of the exercise sections and names to be copied to the new workout forms

    const { journal_exercises } = this.props;

    const exercise_names = [];
    journal_exercises.forEach(exercise => { exercise_names.push(exercise.name)});

    const unique_exercise_names = [...new Set(exercise_names)];

    unique_exercise_names.push(journal_exercises[0].exercise_section); // prepends the exercise type ie: 'Arms', 'Chest' 'Etc' to be used on the new workout screen
    this.props.prevWorkoutActions.receiveCopiedWorkout(unique_exercise_names);
  }

  render() {
    const { auth_token, journal_exercises } = this.props;
    const { workout_id, user_id, the_day, the_date } = this.props.route.params;

    const dynamic_button_title = (this.state.button_pressed) ? 'Copied!' : 'Copy Workout To New Workout';

    return(
      <ScrollView style={{backgroundColor: '#f0f0f0'}}>
        {this.displayExercises()}

        <View style={{paddingTop: 3, paddingBottom: 5, paddingLeft: 10, paddingRight: 10}}>
          <Button
            raised
            type= "outline"
            buttonStyle={{
            }}
            title={dynamic_button_title}
            onPress={() => {this.copyWorkoutData(); this.startTimer();}}
            />
        </View>


      </ScrollView>
    );
  }
}

export default ExercisesList;

const styles = StyleSheet.create({
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
  },
  copied: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'yellow',
    // top: '40%',
    bottom: '5%',
  }
});
