/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { PrimaryNavigator } from './src/navigation';
import { ApolloProvider } from 'react-apollo';
import client from './src/apollo-client';

export default class App extends Component {
  componentDidMount () {
    SplashScreen.hide();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1b2719"
        />
        <PrimaryNavigator />
      </ApolloProvider>
    );
  }
}

