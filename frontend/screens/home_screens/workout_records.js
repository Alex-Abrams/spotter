import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';


class WorkoutRecords extends React.Component {
  constructor(props) {
    super(props);
  }

  displayRecords(sorted_by_weight) {
    // const reversed_sorted_by_weight = sorted_by_weight.reverse();
    const exercise_sections = [];
    sorted_by_weight.forEach((exercise) => exercise_sections.push(exercise.exercise_section));
    console.log(exercise_sections);
    return(
      <View style={styles.container}>
        <View style={styles.records_header}>
          <Text style={styles.records_header}>Heaviest Lift Records</Text>
        </View>
        {exercise_sections.map((section, i) =>
          <View key={i} style={{paddingTop: 10}}>
            <Text style={styles.text_labels}>{section}:</Text>
            <Text>{sorted_by_weight[i].name} {sorted_by_weight[i].weight} lbs</Text>
          </View>
        )}
      </View>
    )
  }

  render() {
    const { sorted_by_weight, current_user, all_exercises } = this.props;

    // const display_records_or_no_records = (sorted_by_weight.length > 0) ? <
    // make the no records thing first and import it here. 

    return(
      <View>
        {this.displayRecords(sorted_by_weight)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
  },
  records_header: {
    alignItems: 'center',
    flex: 1,
    fontSize: 20,
    paddingTop: 8,
  },
  text_labels: {
    color: '#2E91D5',
    fontSize: 16,
  }
});

export default WorkoutRecords;
