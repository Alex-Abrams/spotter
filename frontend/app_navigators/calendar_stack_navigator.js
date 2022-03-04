import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreenContainer from '../containers/calendar_screen_container';
import SelectedDateContainer from '../containers/selected_date_container';

class CalendarStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={CalendarScreenContainer} navigation={this.props.navigation} />
        <Stack.Screen name="Selected Date" component={SelectedDateContainer} options={({ route }) => ({ title: route.params.header })} navigation={this.props.navigation} />
      </Stack.Navigator>
    );
  }
}

export default CalendarStackNavigator;
