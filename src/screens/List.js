import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import SwipeableFlatList from '../components/SwipeableList';

const ACTIONS = ['OK', 'EDIT', 'DELETE'];
const ACTIONS_COLOR = ['blue', 'yellow', 'red'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

type Props = {};
const List = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>This is your List class</Text>
      <SwipeableFlatList
        actionsWidth={200}
        data={[0, 1, 2, 3, 4]}
        renderActions={() => {
          return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {ACTIONS.map((item, index) => (
                <TouchableWithoutFeedback
                  onPress={() => alert(item)}
                  key={index}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 8,
                      backgroundColor: ACTIONS_COLOR[index]
                    }}
                  >
                    <Text>{item}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          );
        }}
        renderContent={item => {
          return (
            <View style={{ backgroundColor: 'white', padding: 16 }}>
              <Text>Item</Text>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

List.defaultProps = {};
export default List;
