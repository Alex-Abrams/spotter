import * as React from 'react';
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';

const Stack = createStackNavigator();

class HomeStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeWelcomeScreenContainer} />
      </Stack.Navigator>
    );
  }
}

export default HomeStackNavigator;
