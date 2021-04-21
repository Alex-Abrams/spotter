import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";

class SetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  // this basically will have the 2 inputs for reps(repetitions) and weight
  // two inputs, and a "submit form...ish" type of button to solidify the sets
  // once the button is entered either have a button for adding set or just make the next input form visible

  render() {
    return(
      <View style={{paddingLeft: 16, paddingRight: 16}}>
        <Text>Set # oi m8</Text>

      <View style={{ paddingTop: 8 }}>
        <TextInput
          placeholder="weight"
          style={{borderWidth: 1, width: "30%", height: 32}}
          />
      </View>
      <View style={{ paddingTop: 8}}>
        <TextInput
        placeholder="# of reps"
        style={{borderWidth: 1, width: "30%", height: 32}}
        />
      </View>
    </View>
    );
  }
}

export default SetForm;
