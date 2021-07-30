import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
// import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, TouchableHighlight, Modal} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";
import TouchableSetItem from './touchable_set_item';
import SetShowEditPopup from './set_show_edit_popup';

class SetShow extends React.Component {
  constructor(props){
    super(props);
    //needs a modal state
    this.state = {
      edit_popup_visible: false,
    };
  }

  // makes a view pop up for deleting/editing sets
  setEditPopupVisible = (visible) => {
    this.setState({ edit_popup_visible: visible });
  }


  render() {

    const { set, setId, weight, reps, number } = this.props;
    // console.log("popup", this.state.edit_popup_visible);

    const display_edit_popup = (this.state.edit_popup_visible) ? (
      <View style={{position: "absolute", right: 60, top: -50, backgroundColor: "yellow", height: 220, width: 220, elevation: 5}}>
        <SetShowEditPopup />
        <View>
          <Button
            title={"click Me"}
            onPress={() => this.setEditPopupVisible(!this.state.edit_popup_visible)} />
        </View>
      </View>

    ) : (
      null
    );

    return(
      <View>
        <TouchableHighlight
          underlayColor="white"
          onLongPress={() => console.log("LOOOONG TOUCH")}
          onPress={() => this.setEditPopupVisible(!this.state.edit_popup_visible)}>
          <TouchableSetItem
            set={set}
            setId={setId}
            weight={weight}
            reps={reps}
            number={number} />
        </TouchableHighlight>

      {display_edit_popup}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal_view: {
    // height: 50, // this made the set thing bigger
  },
  modal: {
    // backgroundColor: "yellow"
    // animationType="slide"
  }
});


export default SetShow;
