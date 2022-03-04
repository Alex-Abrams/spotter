import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; /////


import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container'; //
import SelectWorkoutContainer from '../containers/select_workout_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';

import CalendarStackNavigator from './calendar_stack_navigator';
import JournalStackNavigator from './journal_stack_navigator';

import LoginSignupStack from './login_signup_stack';

import { routes, screens } from './route_items';

import WorkoutNav from './workout_navigator';


const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name); // get the route config object

  if (!item.showInTab) { // hide this tab
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }
};

class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Tab.Navigator screenOptions={{headerShown: false}}>

        <Tab.Screen name="HomeStack" component={HomeWelcomeScreenContainer} options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name={'eye'} size={30} color={focused ? '#551E18' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
        }}
        />

      <Tab.Screen name="JournalStack" component={JournalStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name={'trophy'} size={30} color={focused ? '#551E18' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Journal</Text>
        }}
        />

      <Tab.Screen name="CalendarStack" component={CalendarStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name={'calendar'} size={30} color={focused ? '#551E18' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Calendar</Text>
        }}
        />

      <Tab.Screen name="WorkoutStack" component={SelectWorkoutContainer} navigation={this.props.navigation} options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name={'bell'} size={30} color={focused ? '#551E18' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Workout</Text>
        }}
        />

      <Tab.Screen name="ChartStack" component={ChartMenuScreenContainer} options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name={'chart'} size={30} color={focused ? '#551E18' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Chart</Text>
        }}
        />

      <Tab.Screen name="WorkoutNav" component={WorkoutNav}
        options={{
            tabBarButton: () => null,
            tabBarVisible:false //hide tab bar on this screen

        }}
    />

      </Tab.Navigator>
    );
  }
}


const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
});

export default BottomTabNavigator;
