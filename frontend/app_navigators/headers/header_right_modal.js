// if this is gunna have logout capabilities then it will need to have a container
// although a new tab for 'profile' would be easier. throw the logout there.
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HeaderRightModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text>Logout</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default HeaderRightModal;
