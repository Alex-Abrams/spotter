import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";
import SetShow from './set_show';

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

  updateForm(input, section) {
    // sets and wieghts should only be numeric valuess
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
    const temp_id = (this.props.sets.length === 0) ? 1 : (this.props.sets[this.props.sets.length -1].id) + 1;
    // needss a temp set id
    this.props.workoutActions.receiveSet({id: temp_id, lift_id: this.props.liftId, weight: this.state.weight, reps: this.state.reps});

    this.textInput.clear(); // clear in the inputs after submiting

    this.setState({ weight: ''}); // for someone reason .clear only ceared one input at a time
                                  // and setState also only clered one at a time
  }


  render() {
    const { liftId, sets } = this.props;

    const setsPerLift = () => {
      let selectSets = [];
      sets.forEach(set => {
        if (liftId === set.lift_id) {
          selectSets.push(set);
        };
      });
      return selectSets;
    };

    const setsLiftArray = setsPerLift();

    const setsDisplay = (
      <View>
      {setsLiftArray.map((set, i) =>
        <SetShow
        key={set.id}
        set={set}
        number={i}
        weight={set.weight}
        reps={set.reps}
        setId={set.id} />)}
      </View>
    );

    // console.log("sets: ", sets);
    // console.log("setsPerLift: ", setsPerLift());

    return(
      <View style={{paddingLeft: 16, paddingRight: 16}}>

      {setsDisplay}

      <View style={{ flex: 1, flexDirection: 'row' }}>

        <View style={{ paddingTop: 8 }}>
          <TextInput
            placeholder="weight"
            onChangeText={input => this.updateForm(input, "weight")}
            value={this.state.weight}
            style={{borderWidth: 1, width: 100, height: 32}}
            ref={input => { this.textInput = input }}
            />
        </View>

        <View style={{ paddingTop: 8, paddingLeft: 20 }}>
          <TextInput
            placeholder="# of reps"
            style={{borderWidth: 1, width: 100, height: 32}}
            onChangeText={input => this.updateForm(input, "reps")}
            ref={input => { this.textInput = input }}
            />
        </View>

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
