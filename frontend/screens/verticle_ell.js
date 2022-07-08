import * as React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';

class Ellipse extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
    <View>
      <TouchableOpacity onPress={() => console.log('dah ellipse')}>
        <Text></Text>
      </TouchableOpacity>
    </View>
    )
  }
}

export default Ellipse;
