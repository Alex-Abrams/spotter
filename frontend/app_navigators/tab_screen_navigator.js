import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; /////
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell, faCalendar, faChartLine } from '@fortawesome/free-solid-svg-icons';


import { routes, screens } from './route_items';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container'; //
import SelectWorkoutContainer from '../containers/select_workout_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';
import CalendarStackNavigator from './calendar_stack_navigator';
import JournalStackNavigator from './journal_stack_navigator';
import LoginSignupStack from './login_signup_stack';
import WorkoutNavigator from './workout_navigator';

import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';


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

  userLogout = async () => {
    try {
      // logging out will trigger these store actions to wipe the store
      this.props.authActions.logoutCurrentUser();
      this.props.userActions.resetUser();
      this.props.journalActions.resetJournalExercises(); //
      this.props.journalActions.resetWorkouts();
      this.props.chartActions.resetChartExercises();

    } catch (error) {
      // Error saving data
      return null;
    }
  };

  render() {
    const { loggedIn } = this.props;
    return(
      <Tab.Navigator screenOptions={{headerShown: false}}>

        {(loggedIn == true) ? (
          <>
        <Tab.Screen name="HomeStack" component={HomeWelcomeScreenContainer} options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='home' size={30} color={focused ? '#3f87d9' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
        }}
        />

      <Tab.Screen name="JournalStack" component={JournalStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='book' size={30} color={focused ? '#3f87d9' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Journal</Text>
        }}
        />

      <Tab.Screen name="CalendarStack" component={CalendarStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name={'calendar'} size={30} color={focused ? '#3f87d9' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Calendar</Text>
        }}
        />

      <Tab.Screen name="WorkoutStack" component={SelectWorkoutContainer} navigation={this.props.navigation} options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faDumbbell} size={30} color={focused ? '#3f87d9' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Workout</Text>
        }}
        />

      <Tab.Screen name="ChartStack" component={ChartMenuScreenContainer} options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faChartLine} size={30} color={focused ? '#3f87d9' : '#000'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Chart</Text>
        }}
        />
      {/* workout nav tab screen holds all the body sections when entering new workouts (workout navigator)  */}
      <Tab.Screen name="WorkoutNav" component={WorkoutNavigator}
        options={{
            tabBarButton: () => null,
            tabBarVisible:false //hide tab bar on this screen
        }}
        />
      </>
      ) : (
        <>
        <Tab.Screen name="login" options={{headerShown: false, tabBarVisible:false}} component={LoginContainer} navigation={this.props.navigation} />
        <Tab.Screen name="signup" options={{headerShown: false, tabBarVisible:false}} component={SignupContainer} navigation={this.props.navigation} />
        </>
      )}
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
