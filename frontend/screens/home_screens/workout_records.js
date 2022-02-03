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
      <View style={{paddingLeft: 12}}>
        <Text style={{fontWeight: '800', fontSize: 18}}>{current_user.email} Best Lifts</Text>
          {/* find the heaviest of each category and use whatever name is listed
            Also get the last workout done, putting arms last since least exciting */}
        <Text style={styles.text_labels}>Chest:</Text>
          <Text>{sorted_by_weight[2].name} {sorted_by_weight[2].weight} lbs</Text>
        <Text style={styles.text_labels}>Shoulders:</Text>
          <Text>{sorted_by_weight[1].name} {sorted_by_weight[1].weight} lbs</Text>
        <Text style={styles.text_labels}>Legs:</Text>
          <Text>{sorted_by_weight[3].name} {sorted_by_weight[3].weight} lbs</Text>
        <Text style={styles.text_labels}>Back:</Text>
          <Text>{sorted_by_weight[4].name} {sorted_by_weight[4].weight} lbs</Text>
        <Text style={styles.text_labels}>Arms:</Text>
          <Text>{sorted_by_weight[0].name} {sorted_by_weight[0].weight} lbs</Text>

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

const styles = StyleSheet.create({
  text_labels: {
    color: '#2E91D5',
  }
});

export default WorkoutRecords;
