import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
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

  // at the moment i am unsure what should be added here if anything so for now only the logout button will remain
  // at least until profile settings are been added. 
  render() {
    const { header_modal } = this.props;

    return(
      <TouchableWithoutFeedback onPress={() => this.props.headerActions.receiveEllipseClick(false)}>
      <View style={styles.container}>
        <View>
          <Text>Profile</Text>
          <Text>Account Settings</Text>

          <HeaderRightModal headerModal={header_modal[0]} />

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
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
    backgroundColor: "#e1e3e1",
  },
  logout_button: {
    zIndex: 1,
  },
});

export default Settings;
