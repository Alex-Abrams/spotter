import React, { Component } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';


function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeContainer} />
    <Drawer.Screen name="Home Welcome" component={HomeWelcomeScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
