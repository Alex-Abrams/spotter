import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';


class TouchableJournalItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { user_id, day, the_date, exercise_section } = this.props;
    return(
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 24 }}>{exercise_section}</Text>
        </View>

        <View style={styles.date}>
        <Text style={{ fontSize: 24 }}>{day}</Text>
        <Text>{the_date}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "black",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", // spaces them all very eveenly, 1 left 1 mid 1 right
    height: 80,
    width: "70%",
    // paddingTop: 15,
    // paddingLeft: 16,
  },
  date: {
    flex: 1,
    alignItems: "flex-end",
    // alignSelf: 'flex-end',
    // justifyContent: "flex-end"
  }
});

export default TouchableJournalItem;
