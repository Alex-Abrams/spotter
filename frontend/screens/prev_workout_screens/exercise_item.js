import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


// turns an array of sets from selected date screen into displayed weight and reps
class ExerciseItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { sets } = this.props;

    return(
      <View style={styles.container}>
        {sets.map((set, i) =>
          <View key={i + 1000000}>
        <Text key={i} style={styles.sets}>Set# {i +1}    {set.reps} reps  {set.weight} lbs</Text>
        <View key={i+ 10000} style={styles.set_lines}></View>
      </View>
      )}

      </View>
    );
  }
}

export default ExerciseItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    // paddingBottom: 4,
  },
  sets: {
    fontSize: 16,
    paddingLeft: 16,
    fontFamily: 'Roboto',
  },
  set_lines: {
    borderColor: 'rgba(158, 150, 150, .5)',
    borderWidth: 1,
    borderRadius: 1,
  }
});
