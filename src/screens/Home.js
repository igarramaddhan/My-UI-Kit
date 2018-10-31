import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SnackBar from '../components/SnackBar';
// import SnackbarService from '../services/SnackbarService';

type Props = {};
type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  _handleClick = () => {
    SnackBar.show('Test', 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>This is your Home class</Text>
        <Button title="show" onPress={this._handleClick} /> */}
        <Button
          title="snackbar"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
