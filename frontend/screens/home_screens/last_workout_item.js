import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, Touch } from 'react-native';


class LastWorkoutItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { exercise } = this.props;
    return(
      <View style={{paddingLeft: 12}}>
        <Text style={{color: '#2E91D5', fontWeight: 'bold'}}>{exercise.name}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{paddingRight: 18}}>{exercise.set_count} sets</Text>
          <Text>Top Weight: {exercise.weight} lbs</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default LastWorkoutItem;
