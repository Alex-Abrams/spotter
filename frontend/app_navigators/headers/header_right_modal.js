// if this is gunna have logout capabilities then it will need to have a container
// although a new tab for 'profile' would be easier. throw the logout there.
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HeaderRightModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { headerModal } = this.props;
    console.log('oandowanond', headerModal);

    const display_modal_or_null = (headerModal) ? (
      <View style={styles.modal}>
        <View>
          <Text></Text>
          <Text></Text>
          <Text>Logout</Text>
        </View>
      </View>
    ): (
      null
    );

    return(
      <View>
        {display_modal_or_null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    borderColor: 'black',
    height: 95,
    width: 95,
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 0,
    top: -20,
    elevation: 2,
    zIndex: 2,
  },
});

export default HeaderRightModal;
