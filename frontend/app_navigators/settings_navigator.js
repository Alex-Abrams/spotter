import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsContainer from '../containers/settings_container';
import EllipseContainer from '../containers/ellipse_container';

class SettingsNavigator extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator>
        <Stack.Screen name="Settings Screen" component={SettingsContainer}
          options={{
            headerShown: true,
            headerTitle: 'Settings',
            headerRight: () => (
            <EllipseContainer />
          ),
        }}
          navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}

export default SettingsNavigator;
