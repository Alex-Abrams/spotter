import React, { Component } from 'react';

import { View, Button, ImageBackground, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Image } from 'react-native';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './splash_screen';


const back_image = <Image source={require('../../img/squatrack.png')} />;
const image = { uri: '../../img/squatrack.png'};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      token: '',
    };
  }

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

  _storeData = async (auth_token) => {
  try {
    await AsyncStorage.setItem(
      'token',
      `${auth_token}`
    );
  } catch (error) {
    // Error saving data
  }
};


// ----------------------------------------------------------------------

  _signInHandler() {
    this.props.authActions.loadSplashScreen(true);

    this.props.authActions.getThatToken(this.state.email, this.state.password)
    .then((auth_token) => {
      this._storeData(auth_token.auth_token.auth_token);
      this.setState({ token: auth_token.auth_token.auth_token });
    })
    .then(() => this.props.authActions.requestEmail(this.state.email))

    .then(() => this.props.authActions.getUserInfo(this.state.email, this.state.token));

    this.props.authActions.loadSplashScreen(false);

  }

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


  toSignup({ navigation }) {
    return(
      <View style={{paddingTop: 12}}>
        <Button
          title="New User"
          color="purple"
          onPress={() => this.props.navigation.navigate('signup')}
          >
        </Button>
      </View>
    );
  }

// backgroundColor: '#aedcf2'

  render() {

    return(

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../../img/squatrack.png')} style={{width: '100%', height: '100%'}}>

      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 12, paddingRight: 12}}>

        <View style={{paddingTop: 16}}>
          <Text style={{fontSize: 40, alignSelf: 'center', color: 'white'}}>Spotter</Text>
          <Text style={{fontSize: 18, paddingTop: 10, alignSelf: 'center', color: 'white'}}>The Weight Lifting Workout Journal</Text>
        </View>

        {this.renderError()}
        {this.renderSpinner()}

        <View>
          <Text style={{paddingLeft: 12}}>Email</Text>
        <View style={{paddingLeft: 12, paddingRight: 12}}>
          <TextInput
            placeholder='example@gmail.com'
            onChangeText={email => this.setState({email})}
            style={{paddingLeft: 12, paddingRight: 12, borderBottomWidth: 1, borderLeftWidth: 1, borderBottomColor:'#c1c5c7', borderLeftColor: '#c1c5c7', height: 45, backgroundColor: 'white'}}>
          </TextInput>
        </View>

        <View style={{paddingLeft: 12, paddingRight: 12, paddingTop: 20}}>
          <Text>Password</Text>
          <TextInput
            placeholder='Minimum 6 characters'
            onChangeText={password => this.setState({password})}
            style={{paddingLeft: 12, paddingRight: 12, borderBottomWidth: 1, borderLeftWidth: 1, borderBottomColor:'#c1c5c7', borderLeftColor: '#c1c5c7', height: 45, backgroundColor: 'white'}}>
          </TextInput>
        </View>
        </View>

        <View style={{paddingBottom: 60}}>
        <Button
          title="Submit"
          buttonStyle={{
            fontSize: 20,
            color: '#ffffff',
            backgroundColor: '#00cc00',
            padding: 20,
            marginTop: 10
          }}
          styleDisabled={{ color: 'red' }}
          onPress={() => {this._signInHandler()}
          }/>
        {/*
          {this.logoutButton()}
          */}
          {this.toSignup(this.props.navigation)}
        </View>

      </View>
    </ImageBackground>
    </TouchableWithoutFeedback>

    );
  }
}

export default Login;
