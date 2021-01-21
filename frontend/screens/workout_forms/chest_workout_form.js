import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';


class ChestWorkoutPicker extends React.Component {
  constructor(props) {
    super(props);

    const poo = "poo poo";

    this.state = {
      language: poo,
    };

  };

// "react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",
// "redux-logger": "^3.0.6",
// "redux-thunk": "^2.3.0",



  render() {
    // console.log(route.params.test);
    console.log(this.state.language);
    return(
      <View>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>



        <Text>CHEEEEEEEEEEEEEEEST</Text>
      </View>

    );
  }
}
//
// export default ChestWorkoutPicker;

export function ChestWorkoutForm({ route, navigation }) {
  const { partType } = route.params;
  console.log(partType);
  return(
    <View>
      <Text>howdy</Text>
      <ChestWorkoutPicker />
    </View>
  );
}
