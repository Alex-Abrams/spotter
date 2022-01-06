import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class LastWorkoutTouchableItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    const { last_workout } = this.props;
    console.log(last_workout);
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          <View style={{backgroundColor: 'yellow'}}>
            <Text>Last Workout {last_workout[0].exercise_section}</Text>
          </View>

          <View style={{backgroundColor: 'blue', alignContent: 'flex-end'}}>
            <EvilIcons name={'arrow-down'} size={32} />
          </View>
        </View>

      </View>
    );
  }
}

export default LastWorkoutTouchableItem;
