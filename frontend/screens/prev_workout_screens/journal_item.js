// renaming "prevous workout" to journal since thats what it is i just didnt think of journal for some reason until today

import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import TouchableJournalItem from './touchable_journal_item';

class JournalItem extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    const { user_id, created_at, exercise_section, auth_token } = this.props;
    const days = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
    const dt = new Date(created_at);
    const the_day = days[dt.getDay()];
    //5 - 9
    const the_date = created_at.substring(5, 10);

    return(
      <View style={styles.container}>
        <TouchableHighlight
          style={{ height: 80 }}
          underlayColor="white"
          onPress={() => console.log("ehhh touchable highlight")}>
          <View style={{paddingTop: 15}}>
            <TouchableJournalItem
              user_id={user_id}
              day={the_day}
              the_date={the_date}
              exercise_section={exercise_section} />

          </View>
            </TouchableHighlight>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between", // spaces them all very eveenly, 1 left 1 mid 1 right
    height: 80,
    // width: "90%",
    // paddingTop: 15,
    // paddingLeft: 16,
  }
});

export default JournalItem;
