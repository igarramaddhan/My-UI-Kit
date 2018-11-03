import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import SwipeableItem from './SwipeableItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

type Props = {
  renderActions?: () => React.ReactNode,
  data: ReadonlyArray<T>,
  renderContent: (item<T>) => React.ReactNode,
  actionsWidth?: number
};
const SwipeableFlatList = (props: Props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <SwipeableItem
          actionsWidth={props.actionsWidth}
          renderActions={props.renderActions}
        >
          {props.renderContent(item)}
        </SwipeableItem>
      )}
      keyExtractor={(item, index) => item.toString() + index.toString()}
      ItemSeparatorComponent={() => (
        <View style={{ height: 2, backgroundColor: '#f2f2f2' }} />
      )}
    />
  );
};

SwipeableFlatList.defaultProps = {
  actionsWidth: 120
};
export default SwipeableFlatList;
