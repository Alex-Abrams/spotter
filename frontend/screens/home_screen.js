import React, { Component } from 'react';

import { View, Button, Text, StyleSheet } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.userActions.requestCurrentUser(this.props.email, this.props.auth_token);
    console.log("helzzziio");
  }


  userLogout = async () => {
    try {
      let keys = ['token', 'email'];
      await AsyncStorage.multiRemove(keys);
      this.props.authActions.logoutCurrentUser();
    } catch (error) {
      // Error saving data
      console.log("userLogout: ", error);
    }
  };



  logoutButton() {
    return(
      <View style={styles.buttons}>
        <Button
          title="logout"
          onPress={() => { this.userLogout() }}>
        </Button>
      </View>
    );
  }

  toWorkoutForm({ navigation }) {
    return(
      <View style={styles.buttons}>
        <Button
          title="New Workout"
          onPress={() => this.props.navigation.navigate('Workout Form')}>
        </Button>
      </View>
    );
  }

  toCalendar() {
    return(
      <View style={styles.buttons}>
        <Button
          title="Calendar"
          onPress={() => {console.log("calendar!!")}}>
        </Button>
      </View>
    )
  }

  render() {

    // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
    return(
      <View style={styles.container}>
        <Text>CITYPATOWN, WELCOME HOME</Text>
        <Text>{this.props.email}</Text>
        {this.toWorkoutForm(this.props.navigation)}
        {this.toCalendar()}
        {this.logoutButton()}
      </View>
    );
  } // render
} // class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#C648D7",
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttons: {
    // backgroundColor: "blue",
    padding: 12,
    color: "blue",
  }
});

export default Home;
