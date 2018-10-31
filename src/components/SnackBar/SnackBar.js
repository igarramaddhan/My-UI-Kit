import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const types = {
  default: '#313131',
  success: '#43a047',
  error: '#d32f2f',
  info: '#1976d2',
  warning: '#ffa000'
};

type Props = {
  position?: 'bottom' | 'top'
};

type State = {
  message: string,
  isVisible: boolean,
  color: string,
  position: string
};

class SnackBar extends Component<Props, State> {
  state = {
    message: '',
    isVisible: false,
    position: '',
    color: ''
  };

  value =
    (this.props.position ? this.props.position : this.state.position) ===
    'bottom'
      ? 50
      : -84;
  animatedValue = new Animated.Value(this.value);

  async show(
    message = 'Default SnackBar Message...',
    duration = 3000,
    type?: 'success' | 'error' | 'info' | 'warning' | 'default' = 'default',
    position?: 'bottom' | 'top' = 'bottom'
  ) {
    const { isVisible } = this.state;

    if (!isVisible) {
      this.setValue(position);
      await this.setState({
        message,
        isVisible: true,
        color: type,
        position: position
      });
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }).start(this.hide(duration));
    } else {
      this.close(() => {
        this.show(message, duration, type, position);
      });
    }
  }

  hide = duration => {
    this.timerID = setTimeout(() => {
      const { isVisible } = this.state;
      if (isVisible) {
        Animated.timing(this.animatedValue, {
          toValue: this.value,
          duration: 400,
          useNativeDriver: true
        }).start(() => {
          this.setState({ isVisible: false, message: '' });
          clearTimeout(this.timerID);
        });
      }
    }, duration);
  };

  close = (callback?: Function) => {
    const { isVisible } = this.state;
    if (isVisible) {
      clearTimeout(this.timerID);
      Animated.timing(this.animatedValue, {
        toValue: this.value,
        duration: 400,
        useNativeDriver: true
      }).start(() => {
        this.setState({ isVisible: false, message: '' });
        if (typeof callback === 'function') callback();
      });
    }
  };

  setPosition = (position: 'bottom' | 'top') => {
    this.close(() => {
      this.value = position === 'bottom' ? 50 : -84;
      this.animatedValue.setValue(this.value);
      this.setState({ position: position });
    });
  };

  resetPosition = () => {
    this.close(() => {
      this.value = 50;
      this.animatedValue.setValue(this.value);
      this.setState({ position: '' });
    });
  };

  setValue = (position: 'bottom' | 'top') => {
    this.value = position === 'bottom' ? 50 : -84;
    this.animatedValue.setValue(this.value);
  };

  render() {
    return (
      <Animated.View
        style={[
          {
            transform: [{ translateY: this.animatedValue }],
            backgroundColor: types[this.state.color]
          },
          styles.SnackBarContainter,
          this.value > 0 ? styles.bottom : styles.top
        ]}
      >
        <Text numberOfLines={1} style={styles.SnackBarMessage}>
          {this.state.message}
        </Text>

        <Text style={styles.SnackBarUndoText} onPress={this.close}>
          &#10005;
        </Text>
      </Animated.View>
    );
  }
}

export default SnackBar;

const styles = StyleSheet.create({
  SnackBarContainter: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    right: 0,
    height: 50,
    paddingLeft: 10,
    paddingRight: 55
  },

  top: {
    top: 10,
    right: 10,
    left: 10,
    borderRadius: 3
  },
  bottom: {
    bottom: 0
  },

  SnackBarMessage: {
    color: '#fff',
    fontSize: 18
  },

  SnackBarUndoText: {
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    padding: 5
  }
});
