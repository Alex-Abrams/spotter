import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

class HomeWelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <ScrollView>
        <View>
          <Text>Welcome to Spotter</Text>
        </View>


        <View>
          <Text>Slide Right For Scroll Bar</Text>
        </View>


        <View>
          <Text>Spotlight Records</Text>
          <Text>(No Results Yet!)</Text>
        </View>
      </ScrollView>
    );
  }
}

export default HomeWelcomeScreen;
