import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import DropDownSearch from './dropdown_testing';

import { List, ListItem } from "react-native-elements";


// props
// data: array of data used to create the list
// renderItem: function that will take an individual element of the data array and render a component for it

class ChestWorkoutPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };

    this.arrayNew = [{name:'Patrick star'},{name:'Gallileo'},{name:'Einsten'},{name:'Peterson'},{name:'Schwarzenneger'},{name:'Dostoyevsky'}];


  };


  searchItems(text) {
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
    return (
    <TextInput
      style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
      placeholder="   Type Here...Key word"
      onChangeText={text => this.searchItems(text)}
      value={this.state.value}
    />
  );
};

  submitForm() {
    // this would need to send it to the store
  }

  render() {
    console.log(this.state);

    return(
      <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
        </View>
      <FlatList
          style={{marginTop:40}}
          data={this.state.data}
          renderItem={({item})=>(
          <View style={{justifyContent:'center',marginBottom:10}}>
            <Text onPress={() => this.setState({value: item.name})} style={{backgroundColor:'blue',color:'white',padding:10}}>
              {item.name}
            </Text>
          </View>
          )}
          keyExtractor={item => item.name}
          ListHeaderComponent={this.renderHeader()}
          />
      </View>


    );
  }
}

//
// export default ChestWorkoutPicker;

export function ChestWorkoutForm({ route, navigation }) {
  const { partType } = route.params;

  return(
    <View>
      <Text>howdy</Text>
      <ChestWorkoutPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  }
});
