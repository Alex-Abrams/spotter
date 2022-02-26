import * as React from 'react';

import { AsyncStorage } from 'react-native';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

// import HomeStackNavigator from './home_stack_navigator'; // bottom tabs gets replaced in bottom tab navigator
import BottomTabNavigator from './tab_screen_navigator';

import SelectWorkoutContainer from '../containers/select_workout_container';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';

import CalendarStackNavigator from '../navigators/calendar_stack_navigator';
import JournalStackNavigator from '../navigators/journal_stack_navigator';

import {screens, routes} from './route_items';

/////////////////////////////
import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';
import SplashScreen from '../screens/splash_screen';
///////////////////////////////





class DrawerScreenNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };
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

  ////////////////////
    // -------------------------------------------------------------------
  _retrieveStorageToken = async () => {
    try {
      const auth_token = await AsyncStorage.getItem('token');
      if (auth_token !== null) {
        this.props.authActions.receiveAuthToken({auth_token});
      } else {
        this.props.authActions.receiveAuthToken(null);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  // retrives the email from phone storage, email and auth_token is all you need to remain logged in
  _retrieveStorageEmail = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        this.props.authActions.requestEmail(value);
        // return value;
      } else {
        this.props.authActions.requestEmail(null);
      }

    } catch (error) {
      // Error retrieving data
    }
  };
  // -------------------------------------------------------------------

  componentDidMount() {
    this._retrieveStorageToken();
    this._retrieveStorageEmail();
    this.props.authActions.getUserInfo(this.props.email, this.props.auth_token);
  }
  ////////////////////


  render() {
    const { loggedIn, splash_screen, nav, navigationRef } = this.props;

    const Drawer = createDrawerNavigator();

    const CustomDrawerContent = (props) => {
      // const currentRouteName = props.nav()?.getCurrentRoute().name;
      return (
        <DrawerContentScrollView {...props}>
          {
            routes.filter(route => route.showInDrawer).map((route, index) => {
              // const focused = index === props.state.index;
              // const focusedRouteItem = routes.find(r => r.name === currentRouteName) // get route item config object
              // const focused = focusedRouteItem ?
              //   route.name === focusedRouteItem?.focusedRoute :
              //   route.name === screens.HomeStack
              /////
              // <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
              // style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]} // after onPress
              //// im thinking you could do something with onPRess.. let getting the route
              return (
                <DrawerItem
                  key={route.name}
                  label={() => (
                    <Text style={styles.drawerLabel}>
                      {route.title}
                    </Text>
                  )}
                  onPress={() => props.navigation.navigate(route.name)}
                  style={styles.drawerItem}
                />
              )
            })
          }
        </DrawerContentScrollView>
      );
    }

    console.log('focus?', this.state.focus);

    return(
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#551E18',
            height: 50,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
              <EvilIcons name={"cart"} size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}/>}
      >
      {(loggedIn == true) ? (
        <>
        <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={{
          title: 'Home',
          headerRight: () => (
            <View style={styles.headerRight}>
              <EvilIcons name={"cart"} size={20} color="#fff" />
            </View>
          ),
        }}/>
      </>
    ) : (
      <>
      <Drawer.Screen name="login" options={{headerShown: false, swipeEnabled: false}} component={LoginContainer} navigation={this.props.navigation} />
      <Drawer.Screen name="signup" options={{headerShown: false, swipeEnabled: false}} component={SignupContainer} navigation={this.props.navigation} />
      </>
    )}
      </Drawer.Navigator>

    );
  }
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
})

export default DrawerScreenNavigator;

// <Drawer.Navigator
//     screenOptions={({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: '#551E18',
//         height: 50,
//       },
//       headerLeft: () => (
//         <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
//           <Icon name="bars" size={20} color="#fff" />
//         </TouchableOpacity>
//       ),
//     })}
//     drawerContent={(props) => <CustomDrawerContent {...props} />}
// >
//   <Drawer.Screen name="HomeTab" component={BottomTabNavigator} options={{
//     title: 'Home',
//     headerRight: () => (
//       <View style={styles.headerRight}>
//         <EvilIcons name={"user"} size={20} color="#fff" />
//       </View>
//     ),
//   }}/>
//
// <Drawer.Screen name="Workout" component={SelectWorkoutContainer} options={{
//     title: 'My Rewards',
//     headerTitle: () => <Text style={styles.headerTitle}>New Workout</Text>,
//   }}/>
//
// <Drawer.Screen name="Journal" component={JournalStackNavigator} options={{
//     title: 'Journal',
//     headerTitle: () => <Text style={styles.headerTitle}>My Journal</Text>,
//   }}/>
//
// <Drawer.Screen name="Chart" component={LocationsStackNavigator} options={{
//     title: 'My Workout Charts',
//     headerTitle: () => <Text style={styles.headerTitle}>Workout Charts</Text>,
//   }}/>
//
// <Drawer.Screen name="Calendar" component={CalendarStackNavigator} options={{
//     title: 'Calendar',
//     headerTitle: () => <Text style={styles.headerTitle}>My Calendar</Text>,
//   }}/>
