import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

class HomeWelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { current_user, auth_token, most_recent_workout_id } = this.props;
    this.props.userActions.requestCurrentUser(this.props.email, this.props.auth_token)
    .then((user) => this.props.fetchAllExercises.requestChartExercises(user.currentUser.id, auth_token))
    // .then(() => console.log('test', user));
    .catch(error => console.log(error))
    // .then(() => console.log('testzz'))
    .then(() => this.props.prevWorkoutActions.requestAllWorkouts(this.props.current_user.id, auth_token))
    .catch(error => console.log('zz', error))

    .then((workout_list) => this.props.prevWorkoutActions.requestAllWorkoutExercises(this.props.current_user.id, workout_list.workouts[workout_list.workouts.length - 1].id, auth_token))
    .catch(error => console.log('bb', error));
    // .then((workout_list) => this.props.prevWorkoutActions.requestAllWorkoutExercises(current_user.id, workout_list.workouts[workout_list.workouts.length - 1].id, auth_token));


    this.props.navigation.navigate("Drawer");

    // // user_id, auth_token
    // this.props.fetchAllExercises.requestChartExercises(current_user.id, auth_token);
    // //
    // this.props.prevWorkoutActions.requestAllWorkouts(current_user.id, auth_token); // get al/ the workouts and send to the store
    // // workout_list.workouts[workout_list.workouts.length - 1].id ---> the workout id of the last workout, so i that i can request its exercises and send them to the journal_exercises reducer
    // .then((workout_list) => this.props.prevWorkoutActions.requestAllWorkoutExercises(current_user.id, workout_list.workouts[workout_list.workouts.length - 1].id, auth_token));


  }

  displayLastWorkout() { // display the users last workout {/* */}
    const { last_workout } = this.props;

    const display_last_workout_or_na = (last_workout.length > 0) ? ( // last workout needs to have at least 1 exercise to display
      <View>
        {/* hnnng */}
        <Text>workout is here</Text>
        <Text>{last_workout[0].exercise_section}</Text>

      </View>
    ) : (
      <Text>no last workout</Text>
    );

    return(
      <View>
        {display_last_workout_or_na}
      </View>
    );
  }

  displayRecords(sorted_by_weight) { // dispays the all time records of each main exercise catagory
    // if there is no information it will display something other than the current records
    const { current_user, all_exercises } = this.props;

    const display_records_or_na = (all_exercises.length > 0) ? (
      <View>
        <Text>Heavy Compound Workout Records</Text>
          {/* find the heaviest of each category and use whatever name is listed
            Also get the last workout done */}
        <Text>Arms: {sorted_by_weight[0].name} {sorted_by_weight[0].weight}</Text>
        <Text>Shoulders: {sorted_by_weight[1].name} {sorted_by_weight[1].weight}</Text>
        <Text>Chest: {sorted_by_weight[2].name} {sorted_by_weight[2].weight}</Text>
        <Text>Legs: {sorted_by_weight[3].name} {sorted_by_weight[3].weight}</Text>
        <Text>Back: {sorted_by_weight[4].name} {sorted_by_weight[4].weight}</Text>
      </View>
    ) : (
      <View>
        {/* this will show how to use the tab to the left, and that new workouts appear here */}
        <Text>No workouts yet</Text>
        <Text>New Workout Records Show up there</Text>
      </View>
    );

    return(
      <View>
        {display_records_or_na}
      </View>
    );

  }




  render() {
    const { current_user, all_exercises, last_workout } = this.props;
    // console.log('last_workout', last_workout);


    const sorted_by_type = [];  // sorting all_exercises into an array of sectioned exercises in the order of the types variable
    const types = ['Arms', 'Shoulders', 'Chest', 'Legs', 'Back'];

    for(let i = 0; i < types.length; i ++) { // 5 times filter out each type ie 'Arms, Legs, Etc'
      let type = all_exercises.filter(exercise => exercise.exercise_section === types[i]);
      sorted_by_type.push(type);
    };

    // now i need to find the highest lbs workout for each catagory

    const sorted_by_weight = [];  // an array of the highest lbs object

    for(let i = 0; i < sorted_by_type.length; i ++) {  // go over the array of arrayed sections (5 times)
      let heaviest = 0;

      // next loop iterates through each array section
      for(let z = 0; z < sorted_by_type[i].length; z ++) {
        if (sorted_by_type[i][z].weight > heaviest) { // boolean replaces the highest current weight
          heaviest = sorted_by_type[i][z].weight;
          sorted_by_weight[i] = sorted_by_type[i][z]; // sets the weight in order in the sorted_by_weight array
        };
      };
      heaviest = 0;

    };


    return(
      <ScrollView>
        <View>
          <Text>Welcome to Spotter!!</Text>
          {/* something about welcome to spotter use the tabs on the left site to navigate screens, developed by Alexander Abrams */}
        </View>

        {this.displayLastWorkout()}
        {this.displayRecords(sorted_by_weight)}
        {/* put a line here
          */}

      </ScrollView>
    );
  }
}

export default HomeWelcomeScreen;
