import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class Whoops extends PureComponent {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}
