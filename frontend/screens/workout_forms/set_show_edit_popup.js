
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
// import { Button } from 'react-native-elements';

class SetShowEditPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: '',
      reps: '',
    };
  }



  render() {
    // simple 2 text inputs for adding in weight
    return(
      <View>
        <View>
          <TextInput
            placeholder="weight"
            onChangeText={(input) => this.setState({weight: input})}>
          </TextInput>
        </View>

        <View>
          <TextInput
            placeholder="reps"
            onChangeText={(input) => this.setState({reps: input})}>
          </TextInput>
        </View>
      </View>

    );
  }
}


export default SetShowEditPopup;
