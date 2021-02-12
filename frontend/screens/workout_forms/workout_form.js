import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import { List, ListItem } from "react-native-elements";

import { keywordSearch } from './workout_lift_searchbar/searchbar_keywords';

import WorkoutDropdownSearch from './workout_lift_searchbar/wo_dropdown_search';


export function WorkoutForm({ route, navigation }) {
  const { partType } = route.params;

  return(
    <View style={styles.container}>
      <WorkoutDropdownSearch keywordPart={partType} />
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


// // that blue sqaure i started with that i no longer want, holding onto just in case tho for now
// <View style={{width: 50, height: 60, backgroundColor: 'powderblue', marginTop: 40}}>
// </View>
