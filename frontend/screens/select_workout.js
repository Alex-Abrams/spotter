import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class selectWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



  toBodyPart(array) {
    const bodyList = array.map((part, i) =>
    <View key={i} style={styles.buttonContainer}>
      <Button raised key={i} title={part} buttonStyle={styles.button}></Button>
    </View>
    );
    return(
      <View>
        {bodyList}
      </View>
    );
  }

  testButton() {
    const test = "SIMP";
    return(

        <Button raised buttonStyle={styles.testButton} title={test}></Button>

    );
  }


  render() {
    let bodyArray = ["Chest", "Legs", "Back", "Shoulders", "Arms"];

    return(
      <View style={styles.container}>
        <Text>Bodyparts List</Text>
        {this.toBodyPart(bodyArray)}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: "#C648D7",
    backgroundColor: "#7EE8F5",
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 24,
  },
  button: {
    // margin: 12,
    // backgroundColor: "purple",
    backgroundColor: "#0497A9",
    // borderRadius: 50,
  },
  testButton: {
    // padding: 20,
    margin: 0,
    borderRadius: 50,
  }
});

export default selectWorkout;
