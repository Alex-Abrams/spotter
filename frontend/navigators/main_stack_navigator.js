import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import { AsyncStorage, Navigator, View } from 'react-native';

import LoginContainer from '../containers/login_screen_container';
import SignupContainer from '../containers/signup_container';
import SplashScreen from '../screens/splash_screen';

import DrawerNavigatorContainer from '../containers/drawer_navigator_container';
import TabNavigator from '../navigators/tab_navigator';



class MainStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }


  // -------------------------------------------------------------------
  // retireves the tolen store on the phone and sends it to the store
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


  render() {
    const Stack = createStackNavigator();

    const { loggedIn, splash_screen } = this.props;

    return(

      <Stack.Navigator>
        {(loggedIn == true) ? (
          <>
          <Stack.Screen name="Spotter" component={TabNavigator} navigation={this.props.navigation} />
          
        </>
      ) : (
        <>
        <Stack.Screen name="login" component={LoginContainer} navigation={this.props.navigation} />
        <Stack.Screen name="signup" component={SignupContainer} navigation={this.props.navigation} />
      </>
      )}
    </Stack.Navigator>
    );
  }
}

export default MainStackNavigator;
