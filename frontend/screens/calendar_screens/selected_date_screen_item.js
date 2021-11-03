import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


// turns an array of sets from selected date screen into displayed weight and reps
class SelectedDateScreenItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { sets, dotted_line } = this.props;

    let display_line = null;

    if (dotted_line !== sets.length - 1) {
      console.log("true");
      console.log('name', sets[0].name);
      display_line = (<View style={styles.set_lines}></View>);
    } else {
      console.log("false");
      display_line = null;
    };


    return(
      <View style={styles.container}>
        {sets.map((set, i) =>
          <View>
        <Text
          key={i} style={styles.sets}>Set# {i +1}    {set.reps} reps  {set.weight} lbs</Text>
        <View style={styles.set_lines}></View>
      </View>
      )}

      </View>
    );
  }
}

export default SelectedDateScreenItem;

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
