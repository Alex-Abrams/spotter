// renaming "prevous workout" to journal since thats what it is i just didnt think of journal for some reason until today

import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


class JournalItem extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    const { user_id, created_at, exercise_section, auth_token } = this.props;
    const days = ["Sun", "Mon", "Tues", "Thur", "Fri", "Sat"];
    const dt = new Date(created_at);
    const the_day = days[dt.getDay()];
    //5 - 9
    const the_date = created_at.substring(5, 10);

    console.log("bussy", user_id);
    console.log("bussy", created_at);
    console.log("bussy", exercise_section);
    console.log("bussy", auth_token);

    return(
      <View>
        <Text>{exercise_section}</Text>
        <Text>{the_day}</Text>
        <Text>{the_date}</Text>
      </View>

    );
  }
}

export default JournalItem;
