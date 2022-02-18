import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import PrevWorkoutScreenContainer from '../containers/prev_workout_screen_container';
import SelectWorkoutContainer from '../containers/select_workout_container';
import CalendarScreenContainer from '../containers/calendar_screen_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';
/////////
// import StackNavigatorContainer from '../containers/stack_navigator_container';
import DrawerNavContainer from '../containers/drawernav_container';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; /////
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
////////

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }


  render() { // basically cant use home inside home... check the others too.
    return(
      <Tab.Navigator
        barStyle={{ marginLeft:10, marginRight:10 }}>
        {/*
          <Tab.Screen name="Spotter" component={StackNavigatorContainer} navigation={this.props.navigation} />
          */}
        <Tab.Screen name="Home" options={{ headerShown: false }} component={DrawerNavContainer}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'eye'} size={32} />
            )
          }} />

        <Tab.Screen name="Journal" component={PrevWorkoutScreenContainer}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'trophy'} size={32} />
            )
          }} />

        <Tab.Screen name="Workouts" component={SelectWorkoutContainer}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'navicon'} size={32} />
            )
          }} />

        <Tab.Screen name="Progress Charts" component={ChartMenuScreenContainer}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'chart'} size={32} />
            )
          }} />

        <Tab.Screen name="Calendar" component={CalendarScreenContainer}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'calendar'} size={32}/>
            )
          }} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;
