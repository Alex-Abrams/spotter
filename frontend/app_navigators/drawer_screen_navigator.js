// this navigator is the navigator highest in the navigation nest, it containts the tabs as well as switching to login/signup screens if user is not logged in
// remove_drawer_branch
import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// import BottomTabNavigator from './tab_screen_navigator';
import BottomTabNavigatorContainer from '../containers/tab_screen_container';

import SelectWorkoutContainer from '../containers/select_workout_container';
import ChartMenuScreenContainer from '../containers/chart_menu_screen_container';

import {screens, routes} from './route_items';

import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';


const Drawer = createDrawerNavigator();

class DrawerScreenNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title_header: '',
    };

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

  componentDidMount() {
    this.props.authActions.getUserInfo(this.props.email, this.props.auth_token);
  }

  getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'HOOOME';
    case 'Calendar':
      return 'the Calendar';
    case 'Selected Date':
      return 'select date';
      }
    };

  render() {
    const { loggedIn, nav, navigationRef } = this.props;

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
                  onPress={() => {props.navigation.navigate(route.name); this.setState({title_header: route.title})}}
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
        <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigatorContainer} options={({route}) => ({
            headerTitle: '',
          })}/>
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
