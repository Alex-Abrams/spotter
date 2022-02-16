
import React, {Component} from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback, Easing, TouchableOpacity, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


class Slide extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
      leftPosition : new Animated.Value(-50),
    };
  }

  stopAnimation() {
      this.setState({
        leftPosition : this.state.leftPosition // this forces the left position to remain the same considering the `componentDidMount` method already happened
      });
  };

  mooveLR() {
    Animated.timing(
      this.state.leftPosition,
      {
        toValue: 500,
        duration: 3000, // the duration of the animation
        easing: Easing.bounce, // the style of animation
        useNativeDriver: true,
      }
    ).start(); // starts this annimation once this method is called
  };

  mooveRL() {
    Animated.timing(
      this.state.leftPosition,
      {
        toValue: 0,
        duration: 3000, // the duration of the animation
        easing: Easing.bounce, // the style of animation
        useNativeDriver: true,
      }
    ).start(); // starts this annimation once this method is called
  };

  componentDidMount(){
    // repeats always when the red box return to its initial position : leftPosition === 0
    this.state.leftPosition === -50 ? this.mooveLR() : this.mooveRL();
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View style={{transform: [{translateX: this.state.leftPosition}]}}>
          <EvilIcons name={'chevron-right'} size={100} style={{color: 'blue'}} />
          <Text>Slide out for navigation bar</Text>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default Slide;
