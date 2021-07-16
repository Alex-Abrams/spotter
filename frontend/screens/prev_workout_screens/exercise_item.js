import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

class ExerciseItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { name, weight, reps } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.exercise}>
          <View style={{paddingTop: 12, width: '53%'}}>
            <Text>{name}</Text>
          </View>


            <View style={{paddingTop: 12}}>
              <Text>weight: {weight}lbs</Text>
            </View>


          <View style={{paddingTop: 12}}>
            <Text>reps: {reps}</Text>
          </View>

        </View>
        <View style={{borderWidth: 0.5}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 20,
  },
  exercise: {
    marginTop: 22,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ExerciseItem;
