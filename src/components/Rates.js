import React from 'react';
import {Text, View } from 'react-native';
import { RateScreenStyles as styles } from '../styles';

const Rates = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to Naija BDC
    </Text>
    <Text style={styles.instructions}>
      Check out rates to get started
    </Text>
  </View>
);

export default Rates;
