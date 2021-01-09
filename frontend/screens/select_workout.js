import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

class selectWorkout extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //
    // };
  }

  // npm install -g expo-cli

  // this one is getting error
  // onPress={() => {
  //   this.props.navigation.navigate('WorkoutNav', {
  //     screen: 'Chest',
  //     params: { bodyPartName: part }
  //   });
// }}


  // original below
  // onPress={() => {
  //   this.props.navigation.navigate('Chest', {
  //     bodyPartName: part,
  //   });
// }}

  toBodyPart({navigation}, array) {
    const bodyList = array.map((part, i) =>
    <View key={i} style={styles.buttonContainer}>
      <Button
        raised
        key={i}
        title={part}
        buttonStyle={styles.button}
        onPress={() => this.props.navigation.navigate('WorkoutNav', { screen: `${part}`})}
          ></Button>
    </View>
    );

    return(
      <View>
        {bodyList}
      </View>
    );
  }


  render() {
    let bodyArray = ["Chest", "Legs", "Back", "Shoulders", "Arms"];

    return(
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Bodyparts List</Text>
          <View style={{borderBottomColor: '#0497A9', borderBottomWidth: 1}}></View>
        </View>
        {this.toBodyPart(this.props.navigation, bodyArray)}
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
  text: {
    fontSize: 20,
    paddingLeft: 60,
    color: "#0497A9",
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default selectWorkout;
