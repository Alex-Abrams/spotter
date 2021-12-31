import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

class HomeWelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { current_user, auth_token} = this.props;
    // // user_id, auth_token
    this.props.fetchAllExercises.requestChartExercises(current_user.id, auth_token);
  }

  displayRecords(sorted_by_weight) {
    // if there are no information it will display something other than the current records
    const { current_user, all_exercises } = this.props;

    const display_records_or_na = (all_exercises.length > 0) ? (
      <View>
        <Text>Heavy Compound Workout Records</Text>
          {/* find the heaviest of each category and use whatever name is listed */}
        <Text>Arms: {sorted_by_weight[0].name} {sorted_by_weight[0].weight}</Text>
        <Text>Shoulders: {sorted_by_weight[1].name} {sorted_by_weight[1].weight}</Text>
        <Text>Chest: {sorted_by_weight[2].name} {sorted_by_weight[2].weight}</Text>
        <Text>Legs: {sorted_by_weight[3].name} {sorted_by_weight[3].weight}</Text>
        <Text>Back: {sorted_by_weight[4].name} {sorted_by_weight[4].weight}</Text>
      </View>
    ) : (
      <View>
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
    const { current_user, all_exercises } = this.props;


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

        {/* put a line here */}

        {this.displayRecords(sorted_by_weight)}

      </ScrollView>
    );
  }
}

export default HomeWelcomeScreen;
