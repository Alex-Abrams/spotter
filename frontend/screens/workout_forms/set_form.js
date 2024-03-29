import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Alert} from 'react-native';
import { Button } from 'react-native-elements';
// import { List, ListItem } from "react-native-elements";

import SetShow from './set_show';
import SetShowContainer from '../../containers/set_show_container';

class SetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: '',
      reps: '',
      // disableButton: true,
      weightNumeric: true,
      repsNumeric: true,
    };

    this.deleteLift = this.deleteLift.bind(this);
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

    if (this.state.weightNumeric && this.state.repsNumeric && (this.state.weight.length > 0) && (this.state.reps.length > 0)) {
      const temp_id = (this.props.sets.length === 0) ? 1 : (this.props.sets[this.props.sets.length -1].id) + 1;
      // needss a temp set id
      this.props.workoutActions.receiveSet({id: temp_id, lift_id: this.props.liftId,
        weight: this.state.weight, reps: this.state.reps, exercise_section: this.props.exercise_section, user_id: this.props.current_user.id});

      this.textInput.clear(); // clear in the inputs after submiting

      this.setState({ weight: '' }); // for someone reason .clear only ceared one input at a time
      // and setState also only clered one at a time
      this.setState({ reps: '' });
      // this.setState({ disableButton})
    } else {
      return null;
    };

  }

  displaySets() { // this displays the sets for the appropriate lifts
    const { sets, liftId } = this.props;

    if (sets.length === 0 || sets[0] === null) {
      return null;
    } else {

    const setsPerLift = () => {

      let selectSets = [];
      sets.forEach(set => {    //// seperates sets by lift id
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
        <SetShowContainer
        key={set.id}
        set={set}
        number={i}
        weight={set.weight}
        reps={set.reps}
        setId={set.id} />)}
      </View>
    );

      return setsDisplay;
    };
  }

  deleteLift() {
    // this will filter out the lift to delete and its setz, clear the entire store of lifts and sets, then re-dispatch all of them back
    const { lifts, sets, liftId } = this.props;
    const new_lifts = lifts.filter(lift => liftId !== lift.id);
    const new_sets = sets.filter(set => liftId !== set.lift_id);
    this.props.workoutActions.resetSets();
    this.props.workoutActions.resetLifts();
    new_lifts.forEach(lift => this.props.workoutActions.receiveLift(lift));
    new_sets.forEach(set => this.props.workoutActions.receiveSet(set));
  }

  createTwoButtonAlert = () =>
  Alert.alert(
    `Delete ${this.props.lifts[this.props.liftId - 1].name}?`,
    "",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { cancelable: true},
      { text: "OK", onPress: () => this.deleteLift() }
    ]
  );

  render() {
    const { liftId, sets } = this.props;

    // weightNumeric(if true then the input contains only numbers)
    const errorDisplayWeight = (this.state.weightNumeric === true) ? (
      null
    ) : (
      <View>
        <Text style={{color: 'red'}}>Numbers Only</Text>
      </View>
    );

    const errorDisplayReps = (this.state.repsNumeric === true) ? (
      null
    ) : (
      <View>
        <Text style={{color: 'red'}}>Numbers Only</Text>
      </View>
    );

    return(
      <View style={{paddingLeft: 16, paddingRight: 16}}>

        {this.displaySets()}

      <View style={{ flex: 1, flexDirection: 'row' }}>

        <View style={{ paddingTop: 8, paddingBottom: 6 }}>
          <TextInput
            placeholder="weight   lbs"
            onChangeText={input => this.updateForm(input, "weight")}
            value={this.state.weight}
            style={{borderWidth: 1, width: 100, height: 32, paddingLeft: 8, borderColor: "#0497A9"}}
            ref={input => { this.textInput = input }}
            />
          {errorDisplayWeight}
        </View>

        <View style={{ paddingTop: 8, paddingLeft: 20, paddingBottom: 6 }}>
          <TextInput
            placeholder="# of reps"
            style={{borderWidth: 1, width: 100, height: 32, paddingLeft: 8, borderColor: "#0497A9"}}
            onChangeText={input => this.updateForm(input, "reps")}
            ref={input => { this.textInput = input }}
            />
          {errorDisplayReps}
        </View>

      </View>

      <View>
        <Button
          raised
          title="Confirm Set"
          onPress={() => this.submitForm()}>
        </Button>
      </View>

      <View style={{paddingTop: 9}}>
        <Button
          raised
          title={`Delete ${this.props.lifts[liftId - 1].name}`}
          buttonStyle={{backgroundColor: 'red'}}
          onPress={() => this.createTwoButtonAlert()}>
        </Button>
      </View>

    </View>
    );
  }
}

export default SetForm;
