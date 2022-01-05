import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeWelcomeScreen from '../screens/home_welcome_screen';
import HomeContainer from '../containers/home_container';

import SelectWorkoutContainer from '../containers/select_workout_container';
import WorkoutNav from '../containers/workout_navigator';
import PrevWorkoutScreenContainer from '../containers/prev_workout_screen_container';
import ExercisesListContainer from '../containers/exercises_list_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';
import CalendarScreenContainer from '../containers/calendar_screen_container';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeWelcomeScreenContainer} />
      <Drawer.Screen name="Workouts" component={SelectWorkoutContainer} />
      <Drawer.Screen name="Previous Workouts" component={PrevWorkoutScreenContainer} />
      <Drawer.Screen name="Progress Charts" component={ChartMenuScreenContainer} />
      <Drawer.Screen name="Calendar" component={CalendarScreenContainer} />
    </Drawer.Navigator>
  );
}

export default function DrawerNav() {
  return(
      <MyDrawer />
  );
}
