import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesome } from '@expo/vector-icons';
import { faEllipsisv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import EllipseContainer from '../containers/ellipse_container';

const Stack = createStackNavigator();

class HomeStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name={"Home"}
          component={HomeWelcomeScreenContainer}
          options={{
            headerTitle: "Home",
            headerRight: () => (
              <EllipseContainer />
            ),
          }}
           />
      </Stack.Navigator>
    );
  }
}

export default HomeStackNavigator;
