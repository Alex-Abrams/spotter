import * as React from 'react';
import { View } from 'react-native';

import { AsyncStorage } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import SelectWorkoutContainer from '../containers/select_workout_container';
import WorkoutNav from '../containers/workout_navigator';
import PrevWorkoutScreenContainer from '../containers/prev_workout_screen_container';
import ExercisesListContainer from '../containers/exercises_list_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';
import CalendarScreenContainer from '../containers/calendar_screen_container';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';


const Drawer = createDrawerNavigator();

class DrawerNav extends React.Component {
  constructor(props) {
    super(props);
  }

  userLogout = async () => {
    try {
      let keys = ['token', 'email'];
      await AsyncStorage.multiRemove(keys);
      this.props.authActions.logoutCurrentUser();
    } catch (error) {
      // Error saving data
      // console.log("userLogout: ", error); //
      return null;
    }
  };

  render() {
    // <Drawer.Navigator initialRoute="Spotter" drawerContent={props =>
    return(
      <Drawer.Navigator initialRoute="Spotter" drawerContent={props => {
          return(
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={() => this.userLogout()} />
            </DrawerContentScrollView>
          )
        }}>
        {/*
          // this has been moved
          */}
          <Drawer.Screen name="Spotter" component={HomeWelcomeScreenContainer} />

        <Drawer.Screen name="Workouts" component={SelectWorkoutContainer} />
        <Drawer.Screen name="Journal" component={PrevWorkoutScreenContainer} />
        <Drawer.Screen name="Progress Charts" component={ChartMenuScreenContainer} />
        <Drawer.Screen name="Calendar" component={CalendarScreenContainer} />
      </Drawer.Navigator>

    );
  }
}

export default DrawerNav;
