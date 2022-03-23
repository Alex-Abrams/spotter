import React, { Component } from 'react';
import { View, Text, Keyboard, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
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

    // this.props.authActions.requestEmail(this.state.email); // CETU
    this.props.authActions.receiveUsername(this.state.username);
    // doesnt need dispatch to store here
     // \
  } catch (error) {
    // Error saving data
  }
};

// _storeEmail = async (email) => { // CETU
_storeUsername = async (username) => {
  try {
    await AsyncStorage.setItem(
      // 'email',
      // `${email}`
      'username',
      `${username}`
    );
    // this.props.authActions.requestEmail(email); // CETU
    this.props.authActions.receiveUsername(username);
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
      console.log('error in signuphandler');
    } else {
      this.props.authActions.signupUser(this.state.email, this.state.username, this.state.password, this.state.password_confirmation)
      // .then(() => this.props.authActions.getThatToken(this.state.email, this.state.password)) // CETU
      .then(() => this.props.authActions.getThatToken(this.state.username, this.state.password))
      .then((auth_token) => {
        this._storeData(auth_token.auth_token.auth_token);
        this.setState({ token: auth_token.auth_token.auth_token });
      })
      // .then(() => this._storeEmail(this.state.email)) // CETU
      // .then(() => this.props.authActions.getUserInfo(this.state.email, this.state.token)); // CETU
      .then(() => this._storeUsername(this.state.username)) // CETU
      .then(() => this.props.authActions.getUserInfo(this.state.username, this.state.token)); // CETU
    }
    Keyboard.dismiss();

  }

  renderError() {
    return (
      ( this.props.error ) ? (
        <View>
          <Text style={{ color: "red" }}>
            {this.props.signup_error}
          </Text>
        </View>
      ) : (
        null
      )
    );
  }

  toLoginButton({ navigation }) {
    return(
      <View style={{paddingTop: 10, paddingBottom: 12}}>
        <Button
          raised
          title="Back To Login"
          buttonStyle={{
            backgroundColor: "#5d854e",
            color: '#ffffff',
          }}
          onPress={() => this.props.navigation.navigate('login')}
          >
        </Button>
      </View>
    );
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        {this.renderError()}
        {this.renderSpinner()}

      <Text style={{alignSelf: 'center', fontSize: 24}}>Sign Up For A Spotter Account</Text>

      <View>

        <View style={{paddingLeft: 12, paddingRight: 12}}>
          <Text style={{}}>Email</Text>
          <TextInput
            placeholder='example@gmail.com'
            onChangeText={email => this.setState({email})}
            style={styles.text_input}>
          </TextInput>
        </View>

        <View style={{paddingLeft: 12, paddingRight: 12, paddingTop: 3}}>
          <Text style={{}}>Username</Text>
          <TextInput
            placeholder='Username'
            onChangeText={username => this.setState({username})}
            style={styles.text_input}>
          </TextInput>
        </View>


        <View style={{paddingLeft: 12, paddingRight: 12, paddingTop: 3}}>
          <Text style={{}}>Password</Text>
          <TextInput
            placeholder='Minimum 6 characters'
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            style={styles.text_input}>
          </TextInput>
        </View>


        <View style={{paddingLeft: 12, paddingRight: 12, paddingTop: 3}}>
          <Text style={{}}>Confirm Password</Text>
          <TextInput
            placeholder='Minimum 6 characters'
            secureTextEntry={true}
            onChangeText={password_confirmation => this.setState({password_confirmation})}
            style={styles.text_input}>
          </TextInput>
        </View>
      </View>

      <View>
        <Button
          title="Submit"
          raised
          buttonStyle={{
            fontSize: 20,
            backgroundColor: '#24a6c9',
          }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._signUpHandler()}
        />
        {this.toLoginButton(this.props.navigation)}
      </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default Signup;
