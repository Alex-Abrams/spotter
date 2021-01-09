import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

class ChestWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'java',
    };

  };

// "react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",



  render() {
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

export default ChestWorkoutForm;
