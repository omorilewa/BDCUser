import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Rates } from '../components';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload',
  android: 'Double tap R on your keyboard to reload'
});

class RatesScreen extends Component {
  static displayName = 'RatesScreen';

  render() {
    return (
      <Rates instructions={instructions} />
    );
  }
}

export default RatesScreen;
