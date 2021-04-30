import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";

class SetShow extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    // console.log("setsghow", this.props.lifts);
    // console.log("liftID:", this.props.liftId);
    const { set, setId, weight, reps, number } = this.props;
    // {id: 3, lift_id: 2, weight: "444", reps: "555"}

    const showDisplay = (typeof setId !== "undefined") ? (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
        <Text>Set # {number + 1}</Text>
        <Text style={{paddingLeft: 12}}>Weight: {weight} lbs</Text>
        <Text style={{paddingLeft: 12}}>Reps: {reps}</Text>
        <View>
        </View>
      </View>
    ) : (
      null
    );

    const border = (typeof setId !== "undefined") ? (
      <View style={{borderBottomColor: '#0497A9', borderBottomWidth: 1, paddingBottom: 5, paddingRight: 16}}></View>
    ) : (
      null
    );

    return(
      <View style={{paddingLeft: 16}}>
        { showDisplay }
        { border }
      </View>
    );
  }
}


export default SetShow;
