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




  render() {
    const { current_user, auth_token, all_exercises } = this.props;


    const sorted_by_type = [];  // sorting all_exercises into an array of sectioned exercises in the order of the types variable
    const types = ['Arms', 'Shoulders', 'Chest', 'Legs', 'Back'];

    for(let i = 0; i < types.length; i ++) { // 5 times filter out each type ie 'Arms, Legs, Etc'
      let type = all_exercises.filter(exercise => exercise.exercise_section === types[i]);
      sorted_by_type.push(type);
    };

    // console.log('pisssss', sorted_by_type[0][0].weight > 0);

    // now i need to find the highest lbs workout for each catagory

    const sorted_by_weight = [];  // an array of the highest lbs object
    // console.log(sorted_by_type[0].length);
    for(let i = 0; i < sorted_by_type.length; i ++) {  // go over the array of arrayed sections (5 times)
      let heaviest = 0;
      if (i === 0) {console.log('ppppppp', heaviest)};
      // console.log(heaviest);
      // next loop iterates through each array section
      for(let z = 0; z < sorted_by_type[i].length; z ++) {
        if (sorted_by_type[i][z].weight > heaviest) { // boolean replaces the highest current weight
          heaviest = sorted_by_type[i][z].weight;
          sorted_by_weight[i] = heaviest; // sets the weight in order in the sorted_by_weight array
        };
      };
      heaviest = 0;

    };

    console.log('sorted_by_weight', sorted_by_weight);


    return(
      <ScrollView>
        <View>
          <Text>Welcome to Spotter!!</Text>
        </View>


        <View>
          <Text>Heavy Compound Workout Records</Text>
            {/* find the heaviest of each category and use whatever name is listed */}
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>


        <View>
          <Text>Spotlight Records</Text>
          <Text>(No Results Yet!)</Text>
        </View>
      </ScrollView>
    );
  }
}

export default HomeWelcomeScreen;
