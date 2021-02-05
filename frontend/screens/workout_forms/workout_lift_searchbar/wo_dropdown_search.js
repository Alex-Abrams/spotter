import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
// import {Picker} from '@react-native-picker/picker';

import DropDownSearch from './dropdown_testing';

import { List, ListItem } from "react-native-elements";

class LiftSearchInput extends React.Component {
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
  }

  render() {

    return(
      <View style={styles.container}>
      <FlatList
          style={styles.flatlist}
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
// export default LiftSearchInput;

export function LiftSearchContainer({ route, navigation }) {
  const { partType } = route.params;

  return(
    <View style={styles.container}>
      <LiftSearchInput />
        <View style={{width: 50, height: 60, backgroundColor: 'powderblue', marginTop: 40}}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
  },
  flatcontainer: {
    width: "100%",
  },
  flatlist: {
    width: "100%",
  }
});
