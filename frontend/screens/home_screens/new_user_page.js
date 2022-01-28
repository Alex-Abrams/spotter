import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';

//When a user has no workouts logged, this is the page that will first display upon logging in
class NewUserPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <View>
        <View>
          <Text>Welcome To Spotter!</Text>
          <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 10 }}/>
        </View>
      </View>
    );
  }
}

export default NewUserPage;
