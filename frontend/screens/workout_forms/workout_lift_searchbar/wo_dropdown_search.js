import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { keywordSearch } from './searchbar_keywords';
// import { Icon } from "react-native-vector-icons";
import EvilIcons from 'react-native-vector-icons/EvilIcons';



// testing modal stuff
import { Alert, Modal, Pressable} from "react-native";

import { List, ListItem } from "react-native-elements";
// LiftSearchInput

class WorkoutDropdownSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
      modalVisible: false,
    };

    this.arrayNew = keywordSearch(this.props.keywordPart); // keywordPart comes from the route param passsed from select_workout.js

    console.log("in dropdown search ", this.props);
  };


  searchItems(text) {
    // filter out the array as user types input
    const newData = this.arrayNew.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader(){
    // text input uses searchItems text to filter out the array as its typed
    return (
      <TextInput
        style={styles.input}
        placeholder="   Type Exercise"
        onChangeText={text => this.searchItems(text)}
        value={this.state.value}
      />
    );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  submitForm() {

  }

  render() { // {value: item.name}
    console.log("the stateboooi: ", this.state);

    return(
      <ScrollView style={styles.topScrollView}>
        <KeyboardAvoidingView
          behavior="margin">
      <View style={{backgroundColor: "yellow"}}>
        {/* change to style addWorkoutPressable  */}
        <View style={styles.addWorkoutPressable}>
          <Pressable
            style={{flexDirection: "row"}}
            onPress={() => this.setModalVisible(true)}
            >
            <EvilIcons name="plus" size={30} color="blue" />
            <Text style={{marginTop: 10}}>Add Workout</Text>
          </Pressable>
        </View>

        <Modal
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <FlatList
              style={styles.flatlist}
              data={this.state.data}
              renderItem={({item})=>(
                <View style={styles.listItem}>
                  <Text onPress={() => this.setState({data: [], value: item.name})} style={{backgroundColor:'blue',color:'white',padding:10}}>
                    {item.name}
                  </Text>
                </View>
              )}
              keyExtractor={item => item.name}
              ListHeaderComponent={this.renderHeader()}
              />


          <View style={styles.buttons}>
            <Button
              style={styles.buttonSingle}
              title={"Submit"}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
            </Button>


            <Button
              style={styles.buttonSingle}
              title={"Cancel"}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
            </Button>

          </View>

          </View>
        </Modal>
      </View>


    </KeyboardAvoidingView>
    </ScrollView>
    );
  }
}

//
export default WorkoutDropdownSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 12,
  },
  topScrollView: {

  },
  addWorkoutPressable: {
    elevation: 2,
    backgroundColor: "yellow",
    flexDirection: 'row',
    padding: 10,
  },
  addWorkoutText : {
    paddingLeft: 20,
  },
  input: {
    // { height: 60, borderColor: '#000', borderWidth: 1, margin: 10 }
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  },
  flatcontainer: {
    width: "100%",
  },
  flatlist: {
    width: "100%",
  },
  // {{justifyContent:'center',marginBottom: 2, marginLeft: 10}
  listItem : {
    justifyContent: 'center',
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  buttons: {
    justifyContent: 'flex-end',
  },
  buttonSingle: {
    // elevation: 3,
    marginTop: 15,
    paddingTop: 60,
    backgroundColor: "purple",
  }
});
