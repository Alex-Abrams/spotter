import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { keywordSearch } from './searchbar_keywords';



import { List, ListItem } from "react-native-elements";
// LiftSearchInput

class WorkoutDropdownSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
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
      style={{ height: 60, borderColor: '#000', borderWidth: 1, margin: 20 }}
      placeholder="   Type Here...Key word"
      onChangeText={text => this.searchItems(text)}
      value={this.state.value}
    />
  );
};

  submitForm() {
  }

  render() { // {value: item.name}

    return(
      <View style={styles.container}>
      <FlatList
          style={styles.flatlist}
          data={this.state.data}
          renderItem={({item})=>(
          <View style={{justifyContent:'center',marginBottom:10}}>
            <Text onPress={() => this.setState({data: [], value: item.name})} style={{backgroundColor:'blue',color:'white',padding:10}}>
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
export default WorkoutDropdownSearch;

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
