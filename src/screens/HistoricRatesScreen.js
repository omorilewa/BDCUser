import React, { Component } from 'react';
import { ContentWrapper, HistoricRates } from '../components';

class HistoricRatesScreen extends Component {
  static displayName = 'HistoricRatesScreen';
  static navigationOptions = {
    title: 'Historic Rates',
    headerTitleStyle: {
      fontFamily: 'OpenSans-Regular',
      color: '#FFFC00'
    },
  };

  render() {
    return (
      <ContentWrapper>
        <HistoricRates />
      </ContentWrapper>
    );
  }
}

export default HistoricRatesScreen;
