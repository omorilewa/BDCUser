/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { PrimaryNavigator } from './src/navigation';

export default class App extends Component {
  componentDidMount () {
    SplashScreen.hide();
  }

  render() {
    return (
      <Fragment>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1b2719"
        />
        <PrimaryNavigator />
      </Fragment>
    );
  }
}

