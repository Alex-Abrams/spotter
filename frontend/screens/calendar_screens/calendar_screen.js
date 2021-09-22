import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.chartActions.requestChartExercises(this.props.current_user_id, this.props.auth_token);  // this requests EVERY WORKOUT
  }

  getYearMonthDay(created_at) {
    // const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const the_date = created_at.slice(0, 10);
    return the_date;
  }

  getDateAndExerciseSection() {
    // extract the date and section and put into an array
    const { calendar_exercises } = this.props;
    const date_section_array = [];
    calendar_exercises.forEach(exercise => {
      date_section_array.push({date: this.getYearMonthDay(exercise.created_at), section: exercise.exercise_section});
    });
    return date_section_array;
  }


  render() {
    const testyboy = {

      // {'2021-09-17': {startingDay: true, endingDay: true, color: 'green', textColor: 'black'}},

      ['2021-09-17']: {startingDay: true, endingDay: true, color: 'green', textColor: 'yellow'},
      ['2021-09-18']: {startingDay: true, endingDay: true, color: 'green', textColor: 'blue'},
      ['2021-10-18']: {startingDay: true, endingDay: true, color: 'green', textColor: 'black'},
      ['2021-09-19']: {disabled: true, startingDay: true, color: 'green', endingDay: true}
      };

      // console.log("[1?]", this.getDateAndExerciseSection(this.props.calendar_exercises));
      const date_array = this.getDateAndExerciseSection(this.props.calendar_exercises);

      let marked_dates = {};

      // date_array.forEach(el => {
      //   Object.assign({}, marked_dates, {[el.date]: {startingDay: true, endingDay: true, color: 'green', textColor: 'yellow'}});
      // });

      let fart_date = Object.assign({}, marked_dates, {['2021-09-17']: {startingDay: true, endingDay: true, color: 'green', textColor: 'yellow'}});

      console.log("markedDates", fart_date);

    // console.log(this.getYearMonthDay("2021-05-05T20:29:52.759Z"));
    return(
      <View>
        <Calendar
          current={'2021-09-01'}
          onDayPress={(day) => {console.log('selected day', day)}}
          onDayLongPress={(day) => {console.log('long press', day)}}
          markingType={'period'}
          markedDates={testyboy}>
        </Calendar>
      </View>
    );
  }
}

export default CalendarScreen;

// markedDates={{
//   '2021-09-17': {startingDay: true, endingDay: true, color: 'green', textColor: 'black'},
//   '2021-09-18': {startingDay: true, endingDay: true, color: 'green', textColor: 'black'},
//   '2021-09-19': {disabled: true, startingDay: true, color: 'green', endingDay: true}
// }}>
