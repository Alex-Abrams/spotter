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

import BottomTabNavigator from './tab_screen_navigator';

import SelectWorkoutContainer from '../containers/select_workout_container';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';

import {screens, routes} from './route_items';

/////////////////////////////
import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';
import SplashScreen from '../screens/login_signup_screens/splash_screen';
///////////////////////////////

class DrawerScreenNavigator extends React.Component {
  constructor(props) {
    super(props);

  }

  userLogout = async () => {
    try {
      let keys = ['token', 'email'];
      await AsyncStorage.multiRemove(keys);
      this.props.authActions.logoutCurrentUser();
      /// below resets the store one entity at a time
      this.props.userActions.resetUser();
      this.props.journalActions.resetJournalExercises(); //
      this.props.journalActions.resetWorkouts();
      this.props.chartActions.resetChartExercises();

    } catch (error) {
      // Error saving data
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

    const CustomDrawerContent = (props, {navigation}) => {

      return (
        <DrawerContentScrollView {...props}>
           <DrawerItemList {...props} />
          {
            routes.filter(route => route.showInDrawer).map((route, index) => {
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
          <DrawerItem label="Logout" activeTintColor='#2196f3' inactiveTintColor='red' onPress={() => {this.userLogout(); props.navigation.closeDrawer();}} />
        </DrawerContentScrollView>
      );
    }


    return(
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            height: 50,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
              <EvilIcons name={"navicon"} size={26} />
            </TouchableOpacity>
          ),
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}/>}
      >
      {(loggedIn == true) ? (
        <>
        <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={{
          title: '',
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
