import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeWelcomeScreen from '../screens/home_welcome_screen';
import HomeContainer from '../containers/home_container';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeContainer} />
      <Drawer.Screen name="Home Welcome" component={HomeWelcomeScreen} />
    </Drawer.Navigator>
  );
}

export default function DrawerNav() {
  return(
      <MyDrawer />
  );
}
