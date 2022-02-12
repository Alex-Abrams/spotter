import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Easing, Animated} from 'react-native';
import { Button } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

//When a user has no workouts logged, this is the page that will first display upon logging in
class NoWorkoutsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  animatedArrow() {
    let opacity = new Animated.Value(0);
    const animate = easing => {
      opacity.setValue(0);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        easing
      }).start();
    };

    const size = opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80]
    });

    // const animatedStyles = [
    //   styles.box,
    //   {
    //     opacity,
    //     width: size,
    //     height: size
    //   }
    // ];

    return(
      <View>
        <Animated.View style={{opacity, width: size, height: size}}>
          <EvilIcons name={'chevron-right'} size={62} />
        </Animated.View>
      </View>

    );


  }

  render() {
    return(
      <View>
        <View style={{flex: 1, alignItems: 'center', paddingTop: 15, paddingBottom: 15}}>
          <Text style={{fontSize: 22}}>Welcome To Spotter!</Text>
        </View>

        <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 10 }}/>

        <View>
          <Text>Start logging your workouts to display your records here</Text>
        </View>

        <View>
          <EvilIcons name={'chevron-right'} size={62} />
        </View>

        {this.animatedArrow()}
      </View>
    );
  }
}

export default NoWorkoutsScreen;
