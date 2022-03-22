import React, { Component } from 'react';

import { View, Button, ImageBackground, Text, TouchableWithoutFeedback, Keyboard, TextInput, Image, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './splash_screen';


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
        <View style={{alignSelf: 'center'}}>
          <Text style={{ color: "red", fontSize: 18 }}>
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
          color="#5d854e"
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
        <ImageBackground source={require('../../img/heavy-squat-3.png')} style={{width: '100%', height: '100%'}}>

      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 12, paddingRight: 12}}>

        <View style={{paddingTop: 16}}>
          <Text style={styles.title}>Spotter</Text>
          <Text style={styles.under_title}>The Weight Lifting Workout Journal</Text>
        </View>

        {this.renderError()}
        {this.renderSpinner()}

        <View>
          <Text style={{paddingLeft: 12, color: 'white'}}>Email</Text>
        <View style={{paddingLeft: 12, paddingRight: 12}}>
          <TextInput
            placeholder='example@gmail.com'
            onChangeText={email => this.setState({email})}
            style={styles.text_input}>
          </TextInput>
        </View>

        <View style={{paddingLeft: 12, paddingRight: 12, paddingTop: 20}}>
          <Text style={{color: 'white'}}>Password</Text>
          <TextInput
            placeholder='Minimum 6 characters'
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            style={styles.text_input}>
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
          {this.toSignup(this.props.navigation)}
        </View>

      </View>
    </ImageBackground>
    </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  title:{
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 40,
    alignSelf: 'center',
    color: 'white',
  },
  under_title: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 18,
    paddingTop: 10,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text_input: {
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderBottomColor:'#c1c5c7',
    borderLeftColor: '#c1c5c7',
    height: 45,
    backgroundColor: 'white',
  },
});

export default Login;
