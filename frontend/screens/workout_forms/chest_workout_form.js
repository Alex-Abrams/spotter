import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import DropDownPicker from 'react-native-vector-icons';

class ChestWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
  };

  // basically make the form look pretty
  // set up actions and reeval the h backend stuff
  // and whatever at this pijtn



  render() {
    return(
      <View>
        <DropDownPicker
        items={[
          {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        ]}
      </View>
    );
  }
}

export default ChestWorkoutForm;
