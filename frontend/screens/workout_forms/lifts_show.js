import React from 'react';
// basically make this like "channelshow" from chatcord
// it will reseieve and id prop or soemthing
// thi will be what their list of exercises will be once they complete each soemthing
// it will be abe to be expanded when they click on( gotta figure out)
// for now you need to make it so when they submit their workout a single line apears with the workout name or something
import { List, ListItem } from "react-native-elements";
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Button } from 'react-native-elements';

class LiftsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lift } = this.props;

    const liftItem = (
      <View>
      <Button
        raised
        icon={
          <EvilIcons
            name="arrow-down"
            size={38}
            color="white"
             />
        }
        title={lift.name}
        buttonStyle={{ backgroundColor: "#0497A9"}}
        titleStyle={{fontSize: 24}}
        iconRight
        />
    </View>
    );
    // onPress={() => this.setModalVisible(true)}

    return(
      <View>
        {liftItem}
      </View>
    );
  }
}

export default LiftsShow;
