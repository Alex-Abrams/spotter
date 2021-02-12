import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { List, ListItem } from "react-native-elements";

import { WorkoutForm } from './workout_forms/workout_form';
import WorkoutDropdownSearch from './workout_forms/workout_lift_searchbar/wo_dropdown_search';

/// testing
import AddWorkoutForm from './workout_forms/add_workout_form';

// <WorkoutForm keywordPart={partType} fart={"titties"} />

export function ChestScreen({ route, navigation }) {
  const { partType } = route.params;
  console.log(partType);
  return(
    <View>
      <WorkoutDropdownSearch keywordPart={partType} />
    </View>
  );
}

export function BackScreen({ route, navigation }) {
  const { partType } = route.params;
  console.log(partType);
  return(
    <View style={styles.container}>
      <WorkoutDropdownSearch keywordPart={partType} />
    </View>
  );
}

export function LegsScreen({ route, navigation }) {
  const { partType } = route.params;
  console.log(partType);
  return(
    <View>
      <AddWorkoutForm />
    </View>
  );
}

export function ShouldersScreen({ route, navigation }) {
  const { partType } = route.params;
  console.log(partType);
  return(
    <View>
      <Text>
        SHOULDERS
      </Text>
    </View>
  );
}

export function ArmsScreen({ route, navigation }) {
  const { partType } = route.params;
  console.log(partType);
  return(
    <View>
      <Text>
        ARMS
      </Text>
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
