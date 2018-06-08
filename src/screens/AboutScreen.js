import React, { Component } from 'react';
import { About } from '../components';

class AboutScreen extends Component {
  static displayName = 'AboutScreen';
  static navigationOptions = {
    title: 'About ABCON',
    headerTitleStyle: {
      fontFamily: 'OpenSans-Regular',
      color: '#FFFC00'
    },
  };

  render() {
    return (
      <About />
    );
  }
}

export default AboutScreen;
