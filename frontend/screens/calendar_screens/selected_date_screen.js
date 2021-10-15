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

    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date);

    const exercise_names = [];
    display_exercises.forEach(exercise => { exercise_names.push(exercise.name)});

    const unique_exercise_names = [...new Set(exercise_names)];



    let copy_unique_exercise_names = unique_exercise_names;
    let copy_display_exercises = display_exercises;

    const exer_array = [];
    for (let i = 0; i < copy_unique_exercise_names.length; i++) {
      let title = copy_unique_exercise_names[i];

      exer_array.push(<Text key={i + 100000}>{copy_unique_exercise_names[i]}</Text>);

      for( let n = i; n < copy_display_exercises.length; n++) {
        if(copy_display_exercises[n].name === title) {
          exer_array.push(<Text key={copy_display_exercises[n].id}>Set# {n}    {copy_display_exercises[i].reps}  {copy_display_exercises[i].weight}</Text>);
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
    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // const dt = new Date(date);
    // const the_day = days[dt.getDay()];

    const display_exercises = calendar_exercises.filter(exer => exer.created_at.slice(0, 10) === date); // in use


    // const exercise_names = [];
    // display_exercises.forEach(exercise => { exercise_names.push(exercise.name)});


    // const exer_array = [];
    // for (let i = 0; i < exercise_names.length; i++) {
    //   exer_array.push(<Text>{exercise_names[i]}</Text>);
    // }





    return(
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'yellow', width: '100%'}}>
          <Text style={{backgroundColor: 'gray'}}>{display_exercises[0].exercise_section}</Text>
        </View>

          {this.displayExercises()}

      </ScrollView>
    );
  }
}

export default SelectedDate;
