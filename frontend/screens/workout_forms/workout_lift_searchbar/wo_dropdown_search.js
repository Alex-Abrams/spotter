import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Modal} from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { keywordSearch } from './searchbar_keywords';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


class WorkoutDropdownSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
      modalVisible: false,
    };

    this.arrayNew = keywordSearch(this.props.keywordPart); // keywordPart comes from the route param passsed from select_workout.js

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
        ref={input => { this.textInput = input }}
      />
    );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  submitForm() {
    const temp_id = (this.props.lifts.length === 0) ? 1 : (this.props.lifts[this.props.lifts.length -1].id) + 1;
    // temp_id is for the store only, POSTing only occur after the entire workout(all the lifts are complete)
    this.props.workoutActions.receiveLift({id: temp_id, exercise_section: this.props.keywordPart, name: this.state.value });  // w_id was here

    this.setState({ value: '' });
  }


  render() {

    const addExerButton = (
      <Button
        raised
        icon={
          <EvilIcons
            name="plus"
            size={50}
            color="white"
             />
        }
        title="Add Exercise"
        buttonStyle={{ backgroundColor: "#0497A9"}}
        titleStyle={{fontSize: 24}}
        onPress={() => this.setModalVisible(true)}
        iconRight
        />
    );


    return(
      <ScrollView style={styles.topScrollView}>
        <StatusBar hidden />
        <KeyboardAvoidingView
          behavior="margin">
      <View>

        <View style={styles.addExerciseButtonView}>
          {addExerButton}
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
            <View>
              <Button
                style={styles.buttonSingle}
                title={"Submit"}
                onPress={() => {this.setModalVisible(!this.state.modalVisible); this.submitForm();}}
                >
              </Button>
            </View>

            <View style={{ paddingTop: 12 }}>
              <Button
                style={styles.buttonSingle}
                title={"Cancel"}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
              </Button>
            </View>

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
    // backgroundColor: "#7EE8F5",
  },
  addExerciseButtonView: {
    // elevation: 2,
    // backgroundColor: "#0497A9",
    // flexDirection: 'row',
    padding: 10,
  },
  evilIconButtonText: {
    color: "white",
    width: "80%",
    fontSize: 20,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 33,
    elevation: 3,
    textAlign: 'center'
  },
  input: {
    // { height: 60, borderColor: '#000', borderWidth: 1, margin: 10 }
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
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
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonSingle: {
    // elevation: 3,
    marginTop: 15,
    paddingTop: 60,
    backgroundColor: "purple",
  }
});
