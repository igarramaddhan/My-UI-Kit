import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

type Props = {
  renderActions?: () => React.ReactNode,
  actionsWidth: number
};
type State = {};

export default class SwipeableItem extends Component<Props, State> {
  state = {
    animating: false
  };
  position = new Animated.ValueXY();

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return !this.state.animating;
    },

    onPanResponderGrant: (evt, gestureState) => {
      // this.position.extractOffset();
    },

    onPanResponderMove: (evt, gestureState) => {
      if (
        (gestureState.dx < 0 && this.position.x._value <= 0) ||
        this.position.x._value >= -(this.props.actionsWidth + 10)
      ) {
        this.position.setValue({
          x: this.position.x._value + gestureState.vx * 5,
          y: 0
        });
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx < -this.props.actionsWidth) {
        this.setState({ animating: true }, () => {
          Animated.spring(this.position, {
            toValue: { x: -this.props.actionsWidth, y: 0 },
            friction: 9,
            useNativeDriver: true
          }).start(() => {
            this.position.setValue({ x: -this.props.actionsWidth, y: 0 });
            this.setState({ animating: false });
          });
        });
      } else {
        this.setState({ animating: true }, () => {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 9,
            useNativeDriver: true
          }).start(() => {
            this.position.setValue({ x: 0, y: 0 });
            this.setState({ animating: false });
          });
        });
      }
    }
  });

  renderActions() {
    return (
      <Animated.View
        style={[
          styles.action,
          {
            width: this.props.actionsWidth + 20,
            transform: this.position.getTranslateTransform()
          }
        ]}
      >
        <View style={styles.actionContent}>
          {this.props.renderActions && this.props.renderActions()}
        </View>
      </Animated.View>
    );
  }

  renderMainContent() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.content,
          { transform: this.position.getTranslateTransform() }
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMainContent()}
        {this.renderActions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 60,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row'
  },
  content: {
    width: '100%'
    // backgroundColor: 'green'
  },
  action: {
    // backgroundColor: 'red',
    height: '100%',
    position: 'relative'
    // position: 'absolute',
    // right: 0,
    // zIndex: 0
  },
  actionContent: {
    // backgroundColor: 'green',
    flex: 1,
    paddingRight: 20,
    flexDirection: 'row'
  }
});
