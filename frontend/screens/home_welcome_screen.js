import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

class HomeWelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { current_user, auth_token} = this.props;
    // // user_id, auth_token
    this.props.fetchAllExercises.requestChartExercises(current_user.id, auth_token);
  }


  render() {
    const { current_user, auth_token} = this.props;
    console.log('all dem exers', current_user.id);
    return(
      <ScrollView>
        <View>
          <Text>Welcome to Spotter!!</Text>
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
