// touchable highlight only allows one child so this is for that purpose of displaying the set item
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';



class TouchableSetItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // console.log("setsghow", this.props.lifts);
  // console.log("liftID:", this.props.liftId);
  render() {
    const { set, setId, weight, reps, number } = this.props;
    // {id: 3, lift_id: 2, weight: "444", reps: "555"}

    const showDisplay = (typeof setId !== "undefined") ? (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>

        <Text style={{paddingTop: 10}}>Set # {number + 1}</Text>
        <Text style={{paddingLeft: 12, paddingTop: 10 }}>Weight: {weight} lbs</Text>
        <Text style={{paddingLeft: 12, paddingTop: 10}}>Reps: {reps}</Text>

      </View>
    ) : (
      null
    );

    const border = (typeof setId !== "undefined") ? (
      <View style={{borderBottomColor: '#0497A9', borderBottomWidth: 1, paddingBottom: 10, paddingRight: 16}}></View>
    ) : (
      null
    );


    return(
      <View style={{paddingLeft: 16, paddingRight: 10}}>
        { showDisplay }
        { border }
      </View>
    );
  }
}

export default TouchableSetItem;
