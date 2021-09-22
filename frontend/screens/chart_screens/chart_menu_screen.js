import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Modal} from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { keywordSearch } from '../workout_forms/workout_lift_searchbar/searchbar_keywords';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Picker} from '@react-native-picker/picker';
import ChartScreenContainer from '../../containers/chart_screen_container';

class ChartMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      modalVisible: false,
      nativePicker: '',
      chart_display_section: '',
      input_selected:  false,
      form_submit: false, // svg has problems loading this only need to be true once
    };

    this.arrayNew = keywordSearch(this.state.nativePicker);
    this.updatePicker = this.updatePicker.bind(this);
  }

  componentDidMount() {
    this.props.chartActions.requestChartExercises(this.props.current_user_id, this.props.auth_token);  // this requests EVERY WORKOUT
  }

  searchItems(text) {
    // filter out the array as user types input
    const newData = keywordSearch(this.state.nativePicker).filter(item => { // arrayNew
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader(){ // text input for exercise time
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

  updatePicker(pick) { // will not let them select the default value
    if ( pick !== "1" ) {
      this.setState({ nativePicker: pick });
      this.setState({ input_selected: true });
    }

  }

  renderExerciseSectionPicker() {
    return (
      <View>
        <Picker style={{marginTop: 20, borderWidth: 0.5, marginLeft: 12, marginRight: 12}}
          selectedValue={this.state.nativePicker}
          onValueChange={(pick) => this.updatePicker(pick) }>
          <Picker.Item label="Select Exercise Section..." value="1" />
          <Picker.Item label="Chest" value="Chest" />
          <Picker.Item label="Shoulders" value="Shoulders" />
          <Picker.Item label="Back" value="Back" />
          <Picker.Item label="Legs" value="Legs" />
          <Picker.Item label="Arms" value="Arms" />
        </Picker>
      </View>
    );
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  submitForm() { // submit
    this.setState({ chart_display_section: this.state.value });
    this.setState({ input_selected: false });
    this.setState({ form_submit: true });
  }

  renderExerciseSearchInput() { // this renders the entire modal
    const render_header = (this.state.input_selected) ? (
      <View>
        {this.renderHeader()}
      </View>
    ) : (
      null
    );

    return(
      <ScrollView>
        <StatusBar hidden />
        <Modal
          visible={this.state.modalVisible}
          >
          {this.renderExerciseSectionPicker()}
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
              ListHeaderComponent={render_header}
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

      </ScrollView>
    );
  }

  displayChartScreen() {
    return (
      ( this.state.form_submit) ? (
        <View>
          <ChartScreenContainer exercise={this.state.chart_display_section} />
        </View>
      ) : (
        null
      )
    );
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
        title="Search Exercise"
        buttonStyle={{ backgroundColor: "#0497A9"}}
        titleStyle={{fontSize: 24}}
        onPress={() => this.setModalVisible(true)}
        iconRight
        />
    );


    // <ChartScreenContainer exercise={this.state.chart_display_section} />

    return(
      <ScrollView style={styles.topScrollView}>

          <View>
            <View style={styles.addExerciseButtonView}>
              {addExerButton}

              {this.displayChartScreen()}

            </View>
            {this.renderExerciseSearchInput()}
          </View>

      </ScrollView>
    );
  }
}

export default ChartMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 12,
  },
  addExerciseButtonView: {
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
    marginTop: 15,
    paddingTop: 60,
    backgroundColor: "purple",
  }
});
