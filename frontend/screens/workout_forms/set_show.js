import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
//

// import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, TouchableHighlight, Modal} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";
import TouchableSetItem from './touchable_set_item';

//
import Dialog from "react-native-dialog";

class SetShow extends React.Component {
  constructor(props){
    super(props);
    //needs a modal state
    this.state = {
      edit_dialog_box_visible: false,
      weight: '',
      reps: '',
      weightNumeric: true,
      repsNumeric: true,
    };

    this.submitForm = this.submitForm.bind(this);

  }


  toggleDialogBox = (visible) => {
    this.setState({ edit_dialog_box_visible: visible });
  }


  submitForm() {
    if (this.state.repsNumeric === true && this.state.weightNumeric === true) {
      this.props.workoutActions.editSet({id: this.props.setId, lift_id: this.props.liftId, weight: this.state.weight, reps: this.state.reps});
      this.toggleDialogBox(!this.state.edit_dialog_box_visible);
    } else {
      null;
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

  reactNativeDialog() {
    const { set, setId, weight, reps, number, liftId } = this.props;
    // console.log("setid?!", setId);

    const errorDisplayReps = (this.state.repsNumeric === true) ? (
      null
    ) : (
      <View>
        <Text style={{color: 'red'}}>Numbers Only</Text>
      </View>
    );

    const errorDisplayWeight = (this.state.weightNumeric === true) ? (
      null
    ) : (
      <View>
        <Text style={{color: 'red'}}>Numbers Only</Text>
      </View>
    );

    return(
      <View>
        <Dialog.Container
          visible={this.state.edit_dialog_box_visible}
          onBackdropPress={() => this.toggleDialogBox(!this.state.edit_dialog_box_visible)}>
          <Dialog.Title>Edit Set# {setId}</Dialog.Title>
          <Dialog.Description>
            Weight: {weight} lbs   Reps: {reps}
          </Dialog.Description>
          <Dialog.Input
            label={"Weight"}
            placeholder={"new weight"}
            onChangeText={(input)=> this.updateForm(input, "weight")}></Dialog.Input>
          { errorDisplayWeight }
          <Dialog.Input
            label={"Reps"}
            placeholder={"new reps"}
            onChangeText={(input)=> this.updateForm(input)}></Dialog.Input>
          { errorDisplayReps }
          <Dialog.Button label="Delete Set" onPress={() => { this.props.workoutActions.deleteSet(); this.toggleDialogBox(!this.state.edit_dialog_box_visible);}}/>
          <Dialog.Button label="Cancel" onPress={() => this.toggleDialogBox(!this.state.edit_dialog_box_visible)} />
          <Dialog.Button label="Submit" onPress={() => {this.submitForm()}}/>
        </Dialog.Container>
      </View>
    );
  }


  render() {

    const { set, setId, weight, reps, number } = this.props;

    // this.props.workoutActions.deleteSet();

    return(
      <View>
        <TouchableHighlight
          underlayColor="white"
          onLongPress={() => console.log("LOOOONG TOUCH")}
          onPress={() => this.toggleDialogBox(!this.state.edit_dialog_box_visible)}>
          <TouchableSetItem
            set={set}
            setId={setId}
            weight={weight}
            reps={reps}
            number={number} />
        </TouchableHighlight>

  {this.reactNativeDialog()}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal_view: {
    // height: 50, // this made the set thing bigger
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    height: 400,
    width: 300,
  },
  modal: {

  }
});


export default SetShow;
