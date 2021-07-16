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
import SetForm from './set_form';
import SetFormContainer from '../../containers/set_form_container';
import SetShowContainer from '../../containers/set_show_container';


class LiftsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMinimized: false,
    };
  }


  minOrMaxLiftItem(arrowIcon) {
    return(
      (this.props.lift[0] === null) ? (
        null
      ) : (


      <View style={{paddingTop: 5, paddingRight: 16, paddingLeft: 16,  flex: 1}}>
        <Button
          raised
          icon={
            <EvilIcons
              name={arrowIcon}
              size={38}
              color="white"
               />
          }
          title={this.props.lift.name}
          buttonStyle={{ backgroundColor: "#0497A9", justifyContent: "flex-end", justifyContent: "space-between" }}
          titleStyle={{fontSize: 24}}
          onPress={() => this.setState({isMinimized: !this.state.isMinimized})}
          iconRight
          />
      </View>
    )
  );
  }



  render() {
    const { lift } = this.props;

    // toggles up or down arrow for symbolizing minimizing each lift or maximizing them
    // const displayLiftItem = (this.state.isMinimized) ? liftItemMax : liftItemMin;
    const displayLiftItem = (this.state.isMinimized) ? this.minOrMaxLiftItem("arrow-up") : this.minOrMaxLiftItem("arrow-down");

    const displaySetForm = (!this.state.isMinimized) ? null : ( <SetFormContainer liftId={lift.id} /> ) ;

    const displaySetShowItem = (!this.state.isMinimized) ? null : ( <SetShowContainer liftId={lift.id}/> ) ;

    return(
      <View>
        {displayLiftItem}
        <View>{displaySetShowItem}</View>
        {displaySetForm}
      </View>
    );
  }
}

export default LiftsShow;
