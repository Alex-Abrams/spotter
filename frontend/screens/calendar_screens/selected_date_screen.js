// when a date is selected on calender_screen, this is what will display the workouts from that day.
// if the day has a color it will send them here, otherwise it will do nothing
// if the day is in the future it will schedule the color for the workort --> will need to be added into the database
          /// something like scheduled_workouts, get deleted after the day passes
// doing just the past workouts for now but coming back right after.


import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import SelectedDateScreenItem from './selected_date_screen_item';

class SelectedDate extends React.Component {
  constructor(props) {
    super(props);
  }
  //// FIRST YOu GROUP THEM BY DAY THEN BY WORKOUT ID


  displayExercises() {
    const date = this.props.route.params.date;
    const { calendar_exercises, all_workouts } = this.props; //works
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dt = new Date(date);
    const the_day = days[dt.getDay()];


    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date);

    const exercise_names = [];
    display_exercises.forEach(exercise => { exercise_names.push(exercise.name)});

    const unique_exercise_names = [...new Set(exercise_names)];


    let copy_unique_exercise_names = unique_exercise_names; // ['titles of each exercise']
    let copy_display_exercises = display_exercises;

    //////////////////////////////////////////////////////////////////
    // here im going to group up all the workouts by title before going through them, since they can be out of order when they are posted
    // to the database with a Promise.all
    const arrays_by_titles = [];
    for(let i = 0; i < copy_unique_exercise_names.length; i++) {
      let seperated_exercises = copy_display_exercises.filter(exercise => exercise.name === copy_unique_exercise_names[i]);
      arrays_by_titles.push(seperated_exercises);
    }

    // this arrays_by_titles is now an array of the sorted exercises.
    // below i loop over this one array, pulling out a title from the first in the inner arrays, then lising out all the sets

    const list_exercises = (
      <View>
        {arrays_by_titles.map((exercise, i) =>
          <View key={i + 10000000}>
          <Text key={i + 100000} style={styles.exercise}>{copy_unique_exercise_names[i]}</Text>
          <SelectedDateScreenItem key={i} sets={exercise} />
        </View>
        )}
      </View>
    );



    return list_exercises;

    ///////////////////////////////////////////////////////////////////
  }


  render() {
    const date = this.props.route.params.date;
    const { calendar_exercises, all_workouts } = this.props; //works
    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date); // in use
    const display_exercises_or_alternative = (display_exercises.length === 0) ? (<Text>nothing here</Text>) : (this.displayExercises());
    const display_title_or_null = (display_exercises.length === 0) ? (<Text>nothing here</Text>) : (<Text style={styles.title}>{display_exercises[0].exercise_section}</Text>);

    return(
      <ScrollView>
        <View style={styles.title_view}>
          {display_title_or_null}
        </View>
          {display_exercises_or_alternative}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title_view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#abe6ed', //
    width: '100%',

    marginBottom: 12,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    elevation: 5,

  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto',

  },
  exercise: {
    backgroundColor: "#7EE8F5",
    height: 34,
    fontSize: 27,
    paddingLeft: 12,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    elevation: 5,
  },
  sets: {
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 16,
    fontFamily: 'Roboto',
  }
});

export default SelectedDate;
