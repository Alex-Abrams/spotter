// renaming "prevous workout" to journal since thats what it is i just didnt think of journal for some reason until today

import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import TouchableJournalItem from './touchable_journal_item';
import { NavigationContainer } from '@react-navigation/native';


class JournalItem extends React.Component {
  constructor(props) {
    super(props);


  } //406-375-0004 luckys bail bond


  touchableNavToExercises({navigation}) {
    // basically all  the things below neeed to go in here
    const { user_id, workout_id, created_at, exercise_section, auth_token } = this.props;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dt = new Date(created_at);
    const the_day = days[dt.getDay()];
    //5 - 9
    const the_date = created_at.substring(5, 10);
    //the above code turns created_at into a useable date to display

    // using a touchebale highlight instead of a button, on press sends to display the exercise_section
    //   for tha particular workout
    return(
        <TouchableHighlight
          style={{ height: 80 }}
          underlayColor="white"
          onPress={() => {this.props.navigation.navigate("Previous Exercises", {
            workout_id: workout_id,
            user_id: user_id,
            the_day: the_day,
            the_date: the_date,
            name: `      ${exercise_section}        ${the_day} ${the_date}`,
          });
        }}>

          <View style={{paddingTop: 15}}>
            <TouchableJournalItem
              user_id={user_id}
              day={the_day}
              the_date={the_date}
              exercise_section={exercise_section} />

          </View>
            </TouchableHighlight>
    );
  }


  render() {


    return(
      <View style={styles.container}>
        {this.touchableNavToExercises(this.props.navigation)}
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black", // there may be a problem here with different emulators
    backgroundColor: "#7EE8F5",
    flex: 1,
    height: 80,
  }
});

export default JournalItem;
