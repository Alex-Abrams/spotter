import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { List, ListItem } from "react-native-elements";

import { WorkoutForm } from './workout_forms/workout_form';
import WorkoutDropdownSearch from './workout_forms/workout_lift_searchbar/wo_dropdown_search';
import AddWorkoutForm from './workout_forms/add_workout_form';

// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';




export class BackScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    ////// testing this\
    ////// So this sorta works just maybe done use fontAwesome but Evil should wor
    ///// button works just need to style is nice and pretty
    const myButton = (
      <EvilIcons.Button
        name="plus"
        backgroundColor="purple"
      >
      <Text style={{ color: "#98653b" }}>
        Add New Workout
      </Text>
      </EvilIcons.Button>
    );

    const customTextButton = (
      <EvilIcons.Button name="plus" backgroundColor="#3b983b">
        <Text style={{ fontFamily: 'Roboto', fontSize: 15 }}>
          Login with Facebook
        </Text>
      </EvilIcons.Button>
    );
    ////

    const { partType } = this.props.route.params;
    console.log("CLASS PARTYPE: ", partType);
    return(
      <View>
        <View>
          <WorkoutDropdownSearch keywordPart={partType} />
        </View>

        <View>
          {myButton}
          {customTextButton}
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

  render() {

    const { partType } = this.props.route.params;
    // console.log("CLASS PARTYPE: ", partType);
    // this.props.workoutActions.whateverAction()
    console.log("legs props: ", this.props);
    return(
      <View>
        <WorkoutDropdownSearch keywordPart={partType} />
      </View>
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
      <View>
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
