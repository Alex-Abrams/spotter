import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';


class WorkoutRecords extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { sorted_by_weight, current_user, all_exercises } = this.props;

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
}

export default WorkoutRecords;
