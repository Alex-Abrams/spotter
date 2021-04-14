import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';

class SelectWorkout extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //
    // };
  }

  toBodyPart({navigation}, array) {
    // takes aray of body parts and makes a button that redirects to that form
    const bodyList = array.map((part, i) =>
    <View key={i} style={styles.buttonContainer}>
      <Button
        raised
        key={i}
        title={part}
        buttonStyle={styles.button}
        onPress={() => {this.props.navigation.navigate('WorkoutNav',
           { screen: `${part}`, params: { partType: `${part}` }});
            console.log("hi");}}
        ></Button>
      {/*
      <Button
        raised
        key={i}
        title={part}
        buttonStyle={styles.button}
        onPress={() => this.props.navigation.navigate('WorkoutNav',
         { screen: `${part}`, params: { partType: `${part}` },
       }
       )}
          ></Button>
          */}
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

export default SelectWorkout;
