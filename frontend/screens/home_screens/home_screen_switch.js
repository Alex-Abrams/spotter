
import React, {Component} from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback, Easing, TouchableOpacity } from 'react-native';


class HomeScreenSwitch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View></View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
});


export default HomeScreenSwitch;
