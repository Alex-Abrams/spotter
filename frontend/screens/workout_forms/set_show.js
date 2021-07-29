import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, TouchableHighlight, Modal} from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from "react-native-elements";
import TouchableSetItem from './touchable_set_item';

class SetShow extends React.Component {
  constructor(props){
    super(props);
    //needs a modal state
    this.state = {
      modalVisible: false,
    };
  }

  // starting with mdoal for editing a set, then adding a delete button

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  render() {

    const { set, setId, weight, reps, number } = this.props;
    return(
      <View>
        <TouchableHighlight
          underlayColor="white"
          onLongPress={() => console.log("LOOOONG TOUCH")}
          onPress={() => this.setModalVisible(!this.state.modalVisible)}>
          <TouchableSetItem
            set={set}
            setId={setId}
            weight={weight}
            reps={reps}
            number={number} />
        </TouchableHighlight>

        <View>
          <Modal
            visible={this.state.modalVisible}>
            <View>
              <Button
                title={"click Me"}
                onPress={() => this.setModalVisible(!this.state.modalVisible)} />
            </View>
          </Modal>
        </View>

      </View>
    );
  }
}


export default SetShow;
