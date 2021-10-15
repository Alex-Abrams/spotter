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
    console.log("pRms", this.props.route.params);
    const { calendar_exercises, all_workouts } = this.props; //works
    // console.log(calendar_exercises);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const dt = new Date(date);
    const the_day = days[dt.getDay()];
    console.log("DAAAAAY", the_day);


    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date);
    console.log('filteed', display_exercises);
    // ad0awjdaw

    return(
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'yellow', width: '100%'}}>
          <Text style={{backgroundColor: 'gray'}}>{the_day}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default SelectedDate;
