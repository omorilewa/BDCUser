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

type ConverterProps = {

};

const Converter = (props: ConverterProps) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
    Converter
    </Text>
    <Text style={styles.instructions}>
    This is the converter component
    </Text>
  </View>
);

export default Converter;