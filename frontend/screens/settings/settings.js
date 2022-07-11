import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class Settings extends React.Component {
  constructor(props) {
    super(props);

  }

  userLogout = async () => {
    try {
      // logging out will trigger these store actions to wipe the store
      this.props.authActions.logoutCurrentUser();
      this.props.userActions.resetUser();
      this.props.journalActions.resetJournalExercises(); //
      this.props.journalActions.resetWorkouts();
      this.props.chartActions.resetChartExercises();

    } catch (error) {
      // Error saving data
      return null;
    }
  };

  render() {
    return(
      <View>
        <View>
          <Text>Settings Page</Text>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}
//
// const styles = StyleSheet.create({
//
// });

export default Settings;
