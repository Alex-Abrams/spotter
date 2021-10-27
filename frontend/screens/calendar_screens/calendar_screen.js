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
    this.props.prevWorkoutActions.requestAllWorkouts(this.props.current_user_id, this.props.auth_token);
  }

  getYearMonthDay(created_at) {
    // const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const the_date = created_at.slice(0, 10);
    return the_date;
  }

  getDateAndExerciseSection() {
    // extract the date and section and put into an array
    const { all_workouts } = this.props;
    // console.log("workoutsjourndndn", all_workouts);
    const date_section_array = [];
    all_workouts.forEach(exercise => {
      date_section_array.push({date: this.getYearMonthDay(exercise.created_at), section: exercise.exercise_section});
    });
    return date_section_array;
  }

  setDate(day) {
    this.setState({ date: day});
  }

  directToSelectedDateScreen({ navigation }, day) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dt = new Date(day.dateString);
    const the_day = days[dt.getDay()];

    const { calendar_exercises, all_workouts } = this.props;

    // console.log("calendarexers", calendar_exercises);
    console.log("workouts", all_workouts[5].created_at.slice(0, 9));

    // console.log("dt", dt);
    console.log("daystring", day.dateString);
    // console.log('just day', day);

    this.props.navigation.navigate("Selected Date", {
        date: day.dateString,
        header: `            ${months[day.month - 1]} ${day.day}, ${day.year} `,
      });
  }


  render() {

      let marked_dates = {};
      const date_array = this.getDateAndExerciseSection(this.props.all_workouts);

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

    return(
      <ScrollView>
        <Calendar
          current={'2021-09-01'}
          onDayPress={(day) => {this.directToSelectedDateScreen(this.props.navigation, day)}}
          onDayLongPress={(day) => {console.log('long press', day)}}
          markingType={'period'}
          markedDates={marked_dates}>
        </Calendar>

      <View style={{padding: 8, width: 100}}>
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

    </ScrollView>
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
