// when a date is selected on calender_screen, this is what will display the workouts from that day.
// if the day has a color it will send them here, otherwise it will do nothing
// if the day is in the future it will schedule the color for the workort --> will need to be added into the database
          /// something like scheduled_workouts, get deleted after the day passes
// doing just the past workouts for now but coming back right after.


import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

class SelectedDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = this.props.route.params.date;
    const { calendar_exercises, all_workouts } = this.props; //works

    // calendar_exercises.filter(exercise)
    // console.log('date' , date);
    console.log("calendar ex", calendar_exercises[0].created_at.slice(0,  10)); // this
     const display_exercises = calendar_exercises.filter((exercise) => {
       console.log(exercise.created_at.slice(0, 10));
      exercise.created_at.slice(0, 9) === date;
    })
    // console.log("display_exercises", display_exercises); // works
    return(
      <View>
        <Text>date here... + bold text</Text>
      </View>
    );
  }
}

export default SelectedDate;
