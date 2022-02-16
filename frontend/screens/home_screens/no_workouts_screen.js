import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Easing, Animated} from 'react-native';
import { Button } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SlideArrow from './slide_arrow';

//When a user has no workouts logged, this is the page that will first display upon logging in
class NoWorkoutsScreen extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return(
      <View>
        <View style={{flex: 1, alignItems: 'center', paddingTop: 15, paddingBottom: 15}}>
          <Text style={{fontSize: 22}}>Welcome To Spotter!</Text>
        </View>

        <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 10 }}/>

        <View style={{flex:1, alignItems: 'center', paddingTop: 14}}>
          <Text>Start logging your workouts</Text>
          <Text>to display your records here</Text>
        </View>

        <View style={{paddingTop: 60}}>
          <SlideArrow />
        </View>

      </View>
    );
  }
}

export default NoWorkoutsScreen;
