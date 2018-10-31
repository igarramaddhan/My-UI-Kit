import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SnackBar from '../components/SnackBar';

type Props = {};
type State = {};

export default class Profile extends Component<Props, State> {
  static navigationOptions = {
    title: 'SnackBar'
  };
  _handleClick = () => {
    SnackBar.show('Hello', 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="show" onPress={this._handleClick} color="#313131" />
        <View style={styles.divider} />
        <Button
          title="show from top"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              position: 'top'
            })
          }
          color="#313131"
        />
        <View style={styles.divider} />
        <Button
          title="show success"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'success'
            })
          }
          color="#43a047"
        />
        <View style={styles.divider} />
        <Button
          title="show success from top"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'success',
              position: 'top'
            })
          }
          color="#43a047"
        />
        <View style={styles.divider} />
        <Button
          title="show warning"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'warning'
            })
          }
          color="#ffa000"
        />
        <View style={styles.divider} />
        <Button
          title="show warning from top"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'warning',
              position: 'top'
            })
          }
          color="#ffa000"
        />
        <View style={styles.divider} />
        <Button
          title="show error"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'error'
            })
          }
          color="#d32f2f"
        />
        <View style={styles.divider} />
        <Button
          title="show error from top"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'error',
              position: 'top'
            })
          }
          color="#d32f2f"
        />
        <View style={styles.divider} />
        <Button
          title="show info"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'info'
            })
          }
          color="#1976d2"
        />
        <View style={styles.divider} />
        <Button
          title="show info from top"
          onPress={() =>
            SnackBar.show('Hello', 2000, {
              type: 'info',
              position: 'top'
            })
          }
          color="#1976d2"
        />
        <View style={styles.divider} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8
  },
  divider: {
    marginBottom: 8
  }
});
