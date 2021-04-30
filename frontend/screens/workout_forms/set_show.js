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
    const { set, setId, weight, reps } = this.props;
    // {id: 3, lift_id: 2, weight: "444", reps: "555"}

    const showDisplay = (typeof setId !== "undefined") ? (
      <View>
        <Text>Set #</Text>
        <Text>Weight: {weight}</Text>
        <Text>Reps: {reps}</Text>
      </View>
    ) : (
      null
    );

    return(
      <View style={{paddingLeft: 16}}>
        { showDisplay }
      </View>
    );
  }
}


export default SetShow;
