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
  //// FIRST YOu GROUP THEM BY DAY THEN BY WORKOUT ID


  displayExercises() {
    const date = this.props.route.params.date;
    const { calendar_exercises, all_workouts } = this.props; //works
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dt = new Date(date);
    const the_day = days[dt.getDay()];
    // console.log(the_day); // works

    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date);

    const exercise_names = [];
    display_exercises.forEach(exercise => { exercise_names.push(exercise.name)});

    const unique_exercise_names = [...new Set(exercise_names)];

    // console.log('find error date', date);


    let copy_unique_exercise_names = unique_exercise_names;
    let copy_display_exercises = display_exercises;

    const exer_array = [];
    for (let i = 0; i < copy_unique_exercise_names.length; i++) {
      let title = copy_unique_exercise_names[i];

      exer_array.push(<Text key={i + 100000} style={styles.exercise}>{copy_unique_exercise_names[i]}</Text>);

      let set_num = 0;
      for( let n = i; n < copy_display_exercises.length; n++) {
        if(copy_display_exercises[n].name === title) {
          set_num += 1;
          exer_array.push(<Text style={styles.sets} key={copy_display_exercises[n].id}>Set# {set_num}    {copy_display_exercises[i].reps} reps  {copy_display_exercises[i].weight} lbs</Text>);
        } else {
          copy_display_exercises = copy_display_exercises.slice(2, copy_display_exercises.length);
          break;
        }
      }

    };

    return exer_array;
  }


  render() {
    const date = this.props.route.params.date;
    const { calendar_exercises, all_workouts } = this.props; //works

    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date); // in use
    // console.log("find error 2", display_exercises);

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
    // backgroundColor: '#54d8e8', // darker but lighter blue
    // backgroundColor: '#c5c9c9', // grayish
    backgroundColor: '#abe6ed', //
    width: '100%',

    marginBottom: 12,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    elevation: 5,

  },
  title: {
    // backgroundColor: 'gray',
    fontSize: 32,
    fontFamily: 'Roboto', // probably the one to g with

  },
  exercise: {
    // backgroundColor: "blue",
    backgroundColor: "#7EE8F5",
    height: 34,
    fontSize: 27,
    // color: 'white',
    paddingLeft: 12,
    // borderWidth: 1,
    // borderColor: 'black',

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
