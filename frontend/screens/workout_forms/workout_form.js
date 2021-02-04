import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);


  };

  // so if we have a ambiguous workout form hat recieves titles based on inputs
  // then the actions have to be ambigious
  // and you need a long if else for each <Container />
  // how would that even look
  // something like const workoutActions = {this.props.workoutActions} ??
  // making seperate forms is starting to look might nice
  // this could hold all the forms however
  // perhaps a stack navigator?
  // but if else <Container /> might make the most sense, each carry its on actions.... yep thats the play

  // while there can only be one and only one so sayeth the great queen spider
  // the rules cannot be changed so sayeth the spider
  // as if there was no more the actions that bloind ius set out on this jounry
  // 

  componentDidMount() {
    // this should request tto store based on chest/legs/etc....
  }

  renderTitle() {
    // render each title based on nwhat came through
  }

  submitForm() {

  }

  // all the things in common:
  // submitform, state,


  render() {

    // console.log(this.props.route.params.bodyPartName); // {hashs}

    return(
      <View>
        <Text>LEEEEEEEEEEEEEEEEEEEEEEEEGS</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {

  }
});

export default WorkoutForm;
