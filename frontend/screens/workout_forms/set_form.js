import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";

class SetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: '',
      reps: '',
      onlyNumeric: null,
      weightNumeric: null,
      repsNumeric: null,
    };
  }
  // this basically will have the 2 inputs for reps(repetitions) and weight
  // two inputs, and a "submit form...ish" type of button to solidify the sets
  // once the button is entered either have a button for adding set or just make the next input form visible

  submitForm() {
    // state sends to store
  }

  updateForm(input, section) {
    // const letters = /^[A-Za-z]+$/;
    // const numbers = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ."];
    const num = /^[0-9]+$/;
    if (input.match(num)) {
      // this.setState({weight: input});
      if (section === "weight") {
        this.setState({ weight: input, weightNumeric: true });
      } else {
        this.setState({ reps: input, repsNumeric: true });
      };

      // this.setState({ onlyNumeric: true });
      // console.log("bingo", this.state.onlyNumeric);
    } else {
      if (section === "weight") {
        this.setState({ weight: input, weightNumeric: false });
      } else {
        this.setState({ reps: input, repsNumeric: false });
      };
      // this.setState({onlyNumeric: false});
      // this.setState({weight: input});
      // console.log("not a fucking number or .", this.state.onlyNumeric);
    };

    // this.setState({weight: input});
  }

  render() {
    console.log("after render", this.state.onlyNumeric);
    console.log(this.state);
    // console.log("this.state.weight", this.state.weight);
    return(
      <View style={{paddingLeft: 16, paddingRight: 16}}>
        <Text>Set # oi m8</Text>

      <View style={{ paddingTop: 8 }}>
        <TextInput
          placeholder="weight"
          onChangeText={input => this.updateForm(input, "weight")}
          value={this.state.weight}
          style={{borderWidth: 1, width: "30%", height: 32}}
          />
      </View>
      <View style={{ paddingTop: 8}}>
        <TextInput
        placeholder="# of reps"
        style={{borderWidth: 1, width: "30%", height: 32}}
        onChangeText={input => this.updateForm(input, "reps")}
        />
      </View>
    </View>
    );
  }
}

export default SetForm;
