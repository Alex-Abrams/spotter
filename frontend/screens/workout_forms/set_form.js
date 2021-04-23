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


  updateForm(input, section) {

    const num = /^[0-9]+$/;
    if (input.match(num)) {
      // if the input only contains numbers update input and set numeric to true
      if (section === "weight") {
        this.setState({ weight: input, weightNumeric: true });
      } else {
        // if you put "reps" in section
        this.setState({ reps: input, repsNumeric: true });
      };

    } else {

      if (section === "weight") {
        this.setState({ weight: input, weightNumeric: false });
      } else {
        this.setState({ reps: input, repsNumeric: false });
      };

    };
  }

  submitForm() {
    // state sends to store
    // needss a temp set id
    this.props.workoutActions.receiveSet({lift_id: this.props.liftId, weight: this.state.weight, reps: this.state.reps});
  }

  render() {
    // console.log("after render", this.state.onlyNumeric);
    console.log("SET FORM ID", this.props.liftId);
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

      <View>
        <Button
          title="Confirm"
          onPress={() => this.submitForm()}>
        </Button>
      </View>

    </View>
    );
  }
}

export default SetForm;
