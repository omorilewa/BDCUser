import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

type OtherRatesProps = {
};

const OtherRates = (props: OtherRatesProps) => (
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
