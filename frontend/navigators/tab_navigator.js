import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import PrevWorkoutScreenContainer from '../containers/prev_workout_screen_container';
import SelectWorkoutContainer from '../containers/select_workout_container';
// import CalendarScreenContainer from '../containers/calendar_screen_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';
/////////
// import StackNavigatorContainer from '../containers/stack_navigator_container';
// import DrawerNavContainer from '../containers/drawernav_container';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; /////
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
////////

//// new imports
import CalendarStackNavigator from './calendar_stack_navigator';
import JournalStackNavigator from './journal_stack_navigator';
import DrawerNavigatorContainer from '../containers/drawer_navigator_container';


const Tab = createBottomTabNavigator();

class TabNavigator extends React.Component {
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
        <Tab.Screen name="Home" component={HomeWelcomeScreenContainer}
          navigation={this.props.navigation}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'eye'} size={32} />
            )
          }} />

        <Tab.Screen name="Journal" component={JournalStackNavigator}
          navigation={this.props.navigation}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'trophy'} size={32} />
            )
          }} />

        <Tab.Screen name="WorkoutNav" component={SelectWorkoutContainer}
          navigation={this.props.navigation}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'navicon'} size={32} />
            )
          }} />

        <Tab.Screen name="Progress Charts" component={ChartMenuScreenContainer}
          navigation={this.props.navigation}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'chart'} size={32} />
            )
          }} />

        <Tab.Screen name="Calendar" component={CalendarStackNavigator}
          navigation={this.props.navigation}
          options={{
            tabBarIcon: () => (
              <EvilIcons name={'calendar'} size={32}/>
            )
          }} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
