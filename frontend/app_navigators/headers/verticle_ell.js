import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Ellipse extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
    <View style={styles.dot_container}>
      <TouchableOpacity onPress={() => console.log('dah ellipse')}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  dot_container: {
    paddingRight: 15,
  },
  dot: {
    height: 7,
    width: 7,
    borderWidth: 4,
    borderRadius: 40,
    borderColor: '#9e9e9e',  // a darkish gray
    marginTop: 2,
  }
});

export default Ellipse;
