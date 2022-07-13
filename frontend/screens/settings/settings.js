import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import HeaderRightModal from '../../app_navigators/headers/header_right_modal';

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
      <View style={styles.container}>
        <View>
          <Text>Profile</Text>

          <View style={styles.modal}>
          </View>

          <View style={styles.logout_button}>
            <Button
              raised
              title="Logout"
              onPress={() => this.userLogout()}>
            </Button>
          </View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  logout_button: {
    zIndex: 1,
  },
  modal: {
    borderColor: 'black',
    height: 95,
    width: 95,
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 0,
    top: -20,
    elevation: 2,
    zIndex: 2,
  }
});

export default Settings;