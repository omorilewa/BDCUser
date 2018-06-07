import React, { Component } from 'react';
import { Rates } from '../components';

class RatesScreen extends Component {
  static navigationOptions = {
    title: 'Rates',
    headerTitleStyle: {
      fontFamily: 'OpenSans-Regular',
      color: '#FFFC00'
    },
  };
  static displayName = 'RatesScreen';

  render() {
    return (
      <Rates />
    );
  }
}

export default RatesScreen;
