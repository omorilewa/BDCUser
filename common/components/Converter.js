import React from 'react';
import { Text, View } from 'react-native';
import { StubStyles as styles } from '../styles';

const Converter = () => (
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
