import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Hoshi } from 'react-native-textinput-effects';
import { AsyncStorage } from 'react-native';
import SplashScreen from './splash_screen';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      username: '',
      token: '',
    };

  }

  _storeData = async (auth_token) => {
  try {
    await AsyncStorage.setItem(
      'token',
      `${auth_token}`
    );

    this.props.authActions.requestEmail(this.state.email);
    // doesnt need dispatch to store here
     // \
  } catch (error) {
    // Error saving data
  }
};

_storeEmail = async (email) => {
  try {
    await AsyncStorage.setItem(
      'email',
      `${email}`
    );
    this.props.authActions.requestEmail(email);
  } catch (error) {
    // Error saving data
  }
};

renderSpinner() {
  return(
    ( this.props.splash_screen == true ) ? (
      <View>
        <SplashScreen />
      </View>
    ) : (
      null
    )
  );
}

  _signUpHandler() {

    if(this.state.password !== this.state.password_confirmation) {
      // dispatch error
    } else {
      this.props.authActions.signupUser(this.state.email, this.state.username, this.state.password, this.state.password_confirmation)
      .then(() => this.props.authActions.getThatToken(this.state.email, this.state.password))
      .then((auth_token) => {
        this._storeData(auth_token.auth_token.auth_token);
        this.setState({ token: auth_token.auth_token.auth_token });
      })
      .then(() => this._storeEmail(this.state.email))
      .then(() => this.props.authActions.getUserInfo(this.state.email, this.state.token));
    }


  }

  renderError() {
    return (
      ( this.props.error ) ? (
        <View>
          <Text style={{ color: "red" }}>
            {this.props.error.user_authentication}
          </Text>
        </View>
      ) : (
        null
      )
    );
  }

  toLoginButton({ navigation }) {
    return(
      <View>
        <Button
          raised
          title="To Login"
          color="purple"
          onPress={() => this.props.navigation.navigate('login')}
          >
        </Button>
      </View>
    );
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        {this.renderError()}
        {this.renderSpinner()}
      <Text>SIGNUP SCREEN</Text>
        <Hoshi
          label={'Email'}
          borderColor={'#b76c94'}
          backgroundColor={'#FFF'}
          onChangeText={email => this.setState({email})}
          >
        </Hoshi>

        <Hoshi
          label={'Username'}
          borderColor={'#b76c94'}
          backgroundColor={'#FFF'}
          onChangeText={username => this.setState({username})}
          >
        </Hoshi>


        <Hoshi
          label={'Password'}
          borderColor={'#b76c94'}
          backgroundColor={'#FFF'}
          onChangeText={password => this.setState({password})}
          >
        </Hoshi>
        <Hoshi
          label={'Confirm Password'}
          borderColor={'#b76c94'}
          backgroundColor={'#FFF'}
          onChangeText={password_confirmation => this.setState({password_confirmation})}
          >
        </Hoshi>

        <Button
          title="Submit"
          raised
          buttonStyle={{
            fontSize: 20,
            color: '#ffffff',
            backgroundColor: '#00cc00',
          }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._signUpHandler()}
        />
        {this.toLoginButton(this.props.navigation)}
        </View>
    );
  }
}

export default Signup;
