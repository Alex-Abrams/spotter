import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/native';

// import Picker from 'react-native-input-picker';
// this one will probably hv to be the add wokout modal


class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    // something like
    // worksoutsArray.filter(workout => workoutArray(workout[0... this.state.length] === the ight one ))

  }

  render() {
    return(
      <View>

        <Text>WHAT THE FUCK</Text>
      </View>
    );
  }
}


export default AddWorkoutForm;


// var options ={
//     "1": "Home",
//     "2": "Food",
//     "3": "Car",
//     "4": "Bank",
// };

// <Picker
//     style={{your_style}}
//     mode="dropdown"
//     selectedValue={this.state.selected}
//     onValueChange={()=>{}}>
//     {Object.keys(options).map((key) => {
//         return (<Picker.Item label={this.props.options[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
//     })}
// </Picker>
