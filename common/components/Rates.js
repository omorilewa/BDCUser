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

type RatesProps = {
};

const Rates = (props: RatesProps) => (
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
