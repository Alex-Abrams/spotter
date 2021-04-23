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
    console.log("liftID:", this.props.liftId);
    return(
      <View style={{paddingLeft: 16}}>
        <Text>Set #</Text>
        <Text>Weight: number   Reps: number</Text>
      </View>
    );
  }
}


export default SetShow;
