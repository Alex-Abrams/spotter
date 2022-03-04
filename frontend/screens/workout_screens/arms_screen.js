import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { List, ListItem } from "react-native-elements";
import merge from 'lodash/merge';

import WorkoutDropdownSearch from '../workout_forms/workout_lift_searchbar/wo_dropdown_search';
import WorkoutDropdownSearchContainer from '../../containers/drop_down_container';
import LiftsShow from '../workout_forms/lifts_show';

export class ArmsScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  submitWorkout() { // this function combines sets into lifts into a arge array to post to backend
    const { partType } = this.props.route.params;
    let liftsSets = [];

    const liftsArray = this.props.lifts;
    const setsArray = this.props.sets;

    setsArray.forEach(set => {
      liftsArray.forEach(lift => {
        if (set.lift_id === lift.id) {
          let merged = merge({}, set, lift);
          liftsSets.push(merged);
          return;
        };

      });
    });
    // filter out the sections not relavant to this screen
    const only_arms_sections = liftsSets.filter(lift => partType == lift.exercise_section);
    this.props.submitActions.receiveLiftsAndSets(only_arms_sections);


  }
  ////////

  ////***************************************
  postWorkoutAndRedirectToPrevWorkouts({ navigation }) {
    const { workout, auth_token, liftsAndSets, copied_exercises } = this.props;
    this.props.submitActions.postWorkout(workout, auth_token, liftsAndSets);  // post Workout from workout_submit_actions.js
    this.props.navigation.navigate('HomeStack');
  }


  createTwoButtonAlert = () =>
  Alert.alert(
    "Submit Workout?",
    "",
    [
      {
        text: "Cancel",
        onPress: () => this.props.submitActions.resetLiftsAndSets(),
        style: "cancel"
      },
      { cancelable: true},
      { text: "OK", onPress: () => this.postWorkoutAndRedirectToPrevWorkouts(this.props.navigation) }
    ]
  );

  pasteCopiedWorkout() {
    const { copied_exercises } = this.props;
    const { partType } = this.props.route.params;

    const just_exercise_names = copied_exercises.slice(0, copied_exercises.length -1); // the last element is partType, or name of the exercise section ie: Arms, Shoulders etc

    let temp_id = this.props.lifts.length; // making a temp id based on length so copied workouts can be posted after current workout
    just_exercise_names.forEach((exercise, i) => {
      this.props.workoutActions.receiveLift({id: (temp_id + 1 + i), exercise_section: partType, name: exercise });
    });

    this.props.prevWorkoutActions.resetCopiedJournalExercises();

  }


  render() {

    const { partType } = this.props.route.params; // ie: Arms
    const { lifts, auth_token, workout, liftsAndSets, copied_exercises } = this.props;
    const revLifts = lifts.reverse();

    const only_arms_sections = revLifts.filter(lift => partType == lift.exercise_section);

    const liftsDisplay = (
      <View>
      {only_arms_sections.map(lift =>
        <LiftsShow
        key={lift.id}
        lift={lift} />)}
      </View>
    );

    // if there is copied_exercises data and the last element, which is the exercise part type of the data copied from the journal, is equal to the partType of this screen (Arms, LEgs)
    // then the paste button will show
    const paste_button_display = ( copied_exercises.length > 0 && copied_exercises[copied_exercises.length - 1] === partType) ?
    (<View style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 18 }}>
      <Button
        raised
        title={"Paste Workout"}
        onPress={() => this.pasteCopiedWorkout()}>
      </Button>
    </View>) : (
      null
    );

    return(
      <ScrollView>
        <WorkoutDropdownSearchContainer keywordPart={partType} />
        <View style={{ borderBottomColor: '#0497A9', borderBottomWidth: 1 }}></View>


        {liftsDisplay}

        { paste_button_display }

        <View style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 18 }}>
          <Button
            raised
            title={"Confirm Workout"}
            onPress={() => {this.submitWorkout(); this.createTwoButtonAlert()}}>
          </Button>
        </View>

      </ScrollView>
    );
  }
}
