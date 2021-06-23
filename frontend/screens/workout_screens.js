//USELESS THIS HAS BEEN MOVED TO SEPERATE FILES GET RID OF IT
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { List, ListItem } from "react-native-elements";
import merge from 'lodash/merge';

import { WorkoutForm } from './workout_forms/workout_form';
import WorkoutDropdownSearch from './workout_forms/workout_lift_searchbar/wo_dropdown_search';
import WorkoutDropdownSearchContainer from '../containers/drop_down_container';
import LiftsShow from './workout_forms/lifts_show';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';





export class BackScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { partType } = this.props.route.params;
    console.log("CLASS PARTYPE: ", partType);
    return(
      <View>
        <View>
          <WorkoutDropdownSearchContainer keywordPart={partType} />
        </View>

      </View>
    );
  }
}

///////////////////////////////

export class LegsScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  submitWorkout() { // this function combines sets into lifts into a arge array to post to backend
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
    // console.log("LIFTSSETS: ", liftsSets);
    this.props.submitActions.receiveLiftsAndSets(liftsSets);
    // console.log("length: ", Object.values(this.props.workout).length);

  }
  ////////

  // postLiftSets(liftsAndSets) {
  //   if (this.props.liftsAndSets !== null) {
  //     this.props.submitActions.postLiftsAndSets(liftsAndSets);
  //   };
  // }

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
      { text: "OK", onPress: () => this.props.submitActions.postWorkout(this.props.workout, this.props.auth_token, this.props.liftsAndSets) }
    ]
  );

  //this.props.submitActions.postWorkout(this.props.workout)

  // Object.values(this.props.workout).length
    // this.props.submitActions.postWorkout(workout, auth_token)
    // console.log("button alert workoutuserid", workout /// works!
    // this.props.submitActions.postWorkout(workout, auth_token)

  render() {

    const { partType } = this.props.route.params;
    const { lifts, auth_token, workout, liftsAndSets } = this.props;
    const revLifts = lifts.reverse(); // i want the newest exercise addition to be at the top

    // let testArray = [];
    // testArray.push(this.props.liftsAndSets);
    // // console.log("liftsets [zz1z]", testArray[0]);
    //
    // if (this.props.liftsAndSets !== null) {console.log("pp", this.props.liftsAndSets[1])};


    const liftsDisplay = (
      <View>
      {revLifts.map(lift =>
        <LiftsShow
        key={lift.id}
        lift={lift} />)}
      </View>
    );

    return(
      <ScrollView>
        <WorkoutDropdownSearchContainer keywordPart={partType} />
        <View style={{ borderBottomColor: '#0497A9', borderBottomWidth: 1 }}></View>
        {liftsDisplay}

        <View style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 18 }}>
          <Button
            title={"Confirm Workout"}
            onPress={() => {this.submitWorkout(); this.createTwoButtonAlert()}}>
          </Button>
        </View>

      </ScrollView>
    );
  }
}

//////////////////////////////////////////////

export class ChestScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { partType } = this.props.route.params;
    console.log("CLASS PARTYPE: ", partType);
    return(
      <View style={{ backgroundColor: "#7EE8F5", height: "100%" }}>
        <View>
        </View>
        <WorkoutDropdownSearch keywordPart={partType} />
      </View>
    );
  }
}

////////
export class ShouldersScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { partType } = this.props.route.params;
    console.log("CLASS PARTYPE: ", partType);
    return(
      <View>
        <View>
          <Text>shulders screeeeen</Text>
        </View>
        <WorkoutDropdownSearch keywordPart={partType} />
      </View>
    );
  }
}

//////////////

export class ArmsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { partType } = this.props.route.params;
    console.log("CLASS PARTYPE: ", partType);
    return(
      <View>
        <View>
          <Text>arrrrms screeeeen</Text>
        </View>
        <WorkoutDropdownSearch keywordPart={partType} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
  },
  flatcontainer: {
    width: "100%",
  },
  flatlist: {
    width: "100%",
  }
});
