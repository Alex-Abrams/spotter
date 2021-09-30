import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import merge from 'lodash/merge';

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
    }
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

  setDate(day) {
    this.setState({ date: day});
  }

  directToSelectedDateScreen({ navigation }, day) {
    console.log("zzzzz", day.dateString);
    this.props.navigation.navigate("Selected Date", {
        date: day.dateString,
      });
  }


  render() {

      let marked_dates = {};
      const date_array = this.getDateAndExerciseSection(this.props.calendar_exercises);

      let color_section = ''; // color of the marked date depending on the exercise section
      date_array.forEach(el => {
        if (el.section === "Shoulders") {
          color_section = 'blue';
        } else if (el.section === "Chest") {
          color_section = 'yellow';
        } else if (el.section === "Arms") {
          color_section = 'purple';
        } else if (el.section === "Back") {
          color_section = 'red';
        } else if (el.section === "Legs") {
          color_section = 'green';
        } else {
          color_section = 'orange';
        };

        // example date entry --> ['2021-10-18']: {startingDay: true, endingDay: true, color: 'green', textColor: 'black'},

        let new_date = {[el.date]: {startingDay: true, endingDay: true, color: color_section, textColor: 'black'}};
        // Object.assign({}, marked_dates, {[el.date]: {startingDay: true, endingDay: true, color: 'green', textColor: 'yellow'}});

        let new_date_obj = Object.assign({}, new_date);
        marked_dates = merge({}, marked_dates, new_date_obj);
      });

          //onLongPress wll not work with the dev tools running.
          // {this.directToSelectedDateScreen(this.props.navigation, day)}
          console.log(this.state);
    return(
      <View>
        <Calendar
          current={'2021-09-01'}
          onDayPress={(day) => {this.directToSelectedDateScreen(this.props.navigation, day)}}
          onDayLongPress={(day) => {console.log('long press', day)}}
          markingType={'period'}
          markedDates={marked_dates}>
        </Calendar>

      <View style={{padding: 8}}>
        <View style={styles.legend_bubbles}>
          <View style={{width: 34, height: 34, borderRadius: 17, backgroundColor: 'blue'}}>
          </View>
          <Text style={styles.legend_text}>Shoulders</Text>
        </View>

        <View style={styles.legend_bubbles}>
          <View style={{width: 34, height: 34, borderRadius: 17, backgroundColor: 'yellow'}}>
          </View>
          <Text style={styles.legend_text}>Chest</Text>
        </View>

        <View style={styles.legend_bubbles}>
          <View style={{width: 34, height: 34, borderRadius: 17, backgroundColor: 'purple'}}>
          </View>
          <Text style={styles.legend_text}>Arms</Text>
        </View>

        <View style={styles.legend_bubbles}>
          <View style={{width: 34, height: 34, borderRadius: 17, backgroundColor: 'red'}}>
          </View>
          <Text style={styles.legend_text}>Back</Text>
        </View>

        <View style={styles.legend_bubbles}>
          <View style={{width: 34, height: 34, borderRadius: 17, backgroundColor: 'green'}}>
          </View>
          <Text style={styles.legend_text}>Legs</Text>
        </View>

      </View>

      </View>
    );
  }
}

export default CalendarScreen;

const styles = StyleSheet.create({
  legend_text: {
    paddingTop: 5,
    paddingLeft: 7
  },
  legend_bubbles : {
    paddingTop: 1,
    flexDirection: 'row'
  }
})
