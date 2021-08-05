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
    };

    this.tryingToSubmit = this.tryingToSubmit.bind(this);
    // this.props.workoutActions.editSet = this.props.workoutActions.editSet.bind(this);
  }

  /////keepers below
  updateWeight(input) {
    this.setState({ weight: input })
  }

  updateReps(input) {
    this.setState({ reps: input });
  }

  toggleDialogBox = (visible) => {
    this.setState({ edit_dialog_box_visible: visible });
  }


  tryingToSubmit() {
    this.props.workoutActions.editSet({id: this.props.setId, lift_id: this.props.liftId, weight: this.state.weight, reps: this.state.reps});
  }

  reactNativeDialog() {
    const { set, setId, weight, reps, number, liftId } = this.props;
    // console.log("setid?!", setId);
    return(
      <View>
        <Dialog.Container
          visible={this.state.edit_dialog_box_visible}
          onBackdropPress={() => this.toggleDialogBox(!this.state.edit_dialog_box_visible)}>
          <Dialog.Title>this the title?</Dialog.Title>
          <Dialog.Description>
            This is the dialog description
          </Dialog.Description>
          <Dialog.Input
            label={"weight"}
            onChangeText={(input)=> this.updateWeight(input)}></Dialog.Input>
          <Dialog.Input
            label={"sets"}
            onChangeText={(input)=> this.updateReps(input)}></Dialog.Input>

          <Dialog.Button label="Cancel" onPress={() => this.toggleDialogBox(!this.state.edit_dialog_box_visible)} />
          <Dialog.Button label="Submit" onPress={() => {this.tryingToSubmit(); this.toggleDialogBox(!this.state.edit_dialog_box_visible);}}/>
        </Dialog.Container>
      </View>
    );
  }


  render() {

    const { set, setId, weight, reps, number } = this.props;

    console.log("PROPS???", this.props);
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
