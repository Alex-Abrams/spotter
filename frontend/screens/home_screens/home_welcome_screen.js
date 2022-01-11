import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; /////
import LastWorkoutTouchableItem from './last_workout_touchable_item';

////// FIX THE BOOLEANS ON DISPLAYING OR NOT, SHOULD ALL BE 1 THING

class HomeWelcomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      is_minimized: false,
    };
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

    this.props.navigation.navigate("Drawer");

  }

  // {last_workout[0].exercise_section}

  displayLastWorkout(arrow_direction) { // display the users last workout {/* */}
    const { last_workout } = this.props;


    const display_last_workout_or_na = (last_workout.length > 0) ? ( // last workout needs to have at least 1 exercise to display
      <View style={{flex: 1}}>
        {/* hnnng */}
        <TouchableHighlight
          underlayColor="white"
          style={{ height: 80 }}
          onPress={() => {this.setState({ is_minimized: !this.state.is_minimized})}}>

          <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{paddingLeft: 12}}>
              <Text style={{fontSize: 22}}>Previous Workout</Text>
              <Text style={{fontSize: 15}}>Legs  8 days ago</Text>
            </View>

            <View style={{alignContent: 'flex-end'}}>
              <EvilIcons name={arrow_direction} size={62} />
            </View>
          </View>
        </TouchableHighlight>

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

  displayLastWorkoutExercises() {
    const { last_workout } = this.props; // array of the very last workouts exercises
    // sum each workout by its sets, so if there are 4 Leg presses, itll show => Leg Press 4 sets 300 top weight

    const sorted_exercises = last_workout.sort(function(a, b) { // sort the last_workout object by its names
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });


    ////////////////////////////
    let name = sorted_exercises[0].name;
    let heaviest = sorted_exercises[0];
    let exercises_weight = [];
    for( let i = 0; i < sorted_exercises.length; i ++) { //current heaviest is 185, also last of its name type

      if(sorted_exercises[i].name !== name) { // if there is a change in the name (Leg Press to Squats, then the loop is now at the squats catagory and can push the heaviest weight from the previous catagory)
        name = sorted_exercises[i].name;  // change the name to the current iteration's elements name
        exercises_weight.push(heaviest); // push the heaviest
        heaviest = sorted_exercises[i]; // reset the heaviest to the current iterations eleemtn

      };

      if(sorted_exercises[i].weight > heaviest.weight) { // change the heaviest to current heaviest in the name catagory
        heaviest = sorted_exercises[i];
      };

      if(i === sorted_exercises.length - 1) {  // the last element will always be the indicator to push the heaviest
        exercises_weight.push(heaviest);
      };
    }
    ////////////////////////////
    console.log(exercises_weight);

    // and we deleted the part with the sets........
    //we have exercises_weight --> array with the weights
    return(
      <View>
        {/* display the name of the workout, how many sets and its highest waight */}
        <Text>{}</Text>
      </View>
    );

  }


  displayRecords(sorted_by_weight) { // dispays the all time records of each main exercise catagory
    // if there is no information it will display something other than the current records
    const { current_user, all_exercises } = this.props;

    const display_records_or_na = (all_exercises.length > 0) ? (
      <View style={{backgroundColor: 'blue'}}>
        <Text>Your Best Lifts</Text>
          {/* find the heaviest of each category and use whatever name is listed
            Also get the last workout done, putting arms last since least exciting */}
        <Text>Chest:</Text>
          <Text>{sorted_by_weight[2].name} {sorted_by_weight[2].weight}</Text>
        <Text>Shoulders:</Text>
          <Text>{sorted_by_weight[1].name} {sorted_by_weight[1].weight}</Text>
        <Text>Legs:</Text>
          <Text>{sorted_by_weight[3].name} {sorted_by_weight[3].weight}</Text>
        <Text>Back:</Text>
          <Text>{sorted_by_weight[4].name} {sorted_by_weight[4].weight}</Text>
        <Text>Arms:</Text>
          <Text>{sorted_by_weight[0].name} {sorted_by_weight[0].weight}</Text>

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

    const display_last_workout = (this.state.is_minimized) ? this.displayLastWorkout("chevron-up") : this.displayLastWorkout("chevron-down");

    // console.log('last_workout', last_workout);
    // console.log('state', this.state.is_minimized);
    this.displayLastWorkoutExercises();


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

    console.log('sets?!?!', sorted_by_weight);

    return(
      <ScrollView>
        {display_last_workout}
        {this.displayRecords(sorted_by_weight)}
        {/* put a line here
          */}
      </ScrollView>
    );
  }
}

export default HomeWelcomeScreen;
