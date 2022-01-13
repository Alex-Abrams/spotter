import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import { Button } from 'react-native-elements';
import * as Progress from 'react-native-progress';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
}

export default LoadingScreen;
