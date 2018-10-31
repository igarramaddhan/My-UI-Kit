import React from 'react';
import SnackBar from './SnackBar';

let _snackbar;

function setSnackbar(snackbarRef) {
  _snackbar = snackbarRef;
}

type Props = {
  position?: 'bottom' | 'top'
};

export default class extends React.Component<Props> {
  static show(
    message?: string,
    duration?: number,
    opts?: {
      type?: 'success' | 'error' | 'info' | 'warning' | 'default',
      position?: 'bottom' | 'top'
    } = { type: 'default', position: 'bottom' }
  ) {
    // console.log(mes)
    _snackbar.show(message, duration, opts.type, opts.position);
  }

  render() {
    return (
      <SnackBar ref={ref => setSnackbar(ref)} position={this.props.position} />
    );
  }
}
