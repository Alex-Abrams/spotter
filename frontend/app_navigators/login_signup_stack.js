import * as React from 'react';
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';

const Stack = createStackNavigator();

class LoginSignupStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Stack.Navigator initialRoute={'Login'}>
        <Stack.Screen name="Login" component={LoginContainer} navigation={this.props.navigation} />
        <Stack.Screen name="Signup" component={SignupContainer} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}

export default LoginSignupStack;
