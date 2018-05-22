import React from 'react';
import { Text, View } from 'react-native';
import { StubStyles as styles } from '../styles';

const OtherRates = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
    Show other rates
    </Text>
    <Text style={styles.instructions}>
    Check out rates from other persons
    </Text>
  </View>
);

export default OtherRates;
