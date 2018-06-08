
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { RateScreenStyles as styles } from '../styles';

export default class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <View>
        <View style={[styles.row, styles.margin]}>
          <View style={styles.row}>
            <Text style={styles.white}>Wed, 29th April</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.white}>Currency</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.indicator, styles.afternoon]}></View>
            <Text style={styles.white}>Buy Range</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.indicator, styles.evening]}></View>
            <Text style={styles.white}>Sell Range</Text>
          </View>
        </View>
        <Text>Hello from the other side</Text>
      </View>
    );
  }
}
