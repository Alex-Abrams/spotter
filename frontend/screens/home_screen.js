import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.userActions.requestCurrentUser(this.props.email, this.props.auth_token);
  }


  userLogout = async () => {
    try {
      let keys = ['token', 'email'];
      await AsyncStorage.multiRemove(keys);
      this.props.authActions.logoutCurrentUser();
    } catch (error) {
      // Error saving data
      // console.log("userLogout: ", error); //
      return null;
    }
  };



  logoutButton() { // this needs to look sleaker, with an evilicon or something
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
          onPress={() => this.props.navigation.navigate('Workouts')}>
        </Button>
      </View>
    );
  }

  toPreviousWorkouts({ navigation }) {
    return(
      <View style={styles.buttons}>
        <Button
          title="Previous Workouts"
          onPress={() => {this.props.navigation.navigate("Previous Workouts")}}>
        </Button>
      </View>
    )
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

  toProgressCharts() {
    return(
      <View style={styles.buttons}>
        <Button
          title="Progess Charts"
          onPress={() => {console.log("progress charts")}}>
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
        {this.toPreviousWorkouts(this.props.navigation)}
        {this.toCalendar()}
        {this.toProgressCharts()}
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
