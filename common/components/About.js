import React from 'react';
import { Text, View } from 'react-native';
import { StubStyles as styles } from '../styles';

const About = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
    About us
    </Text>
    <Text style={styles.instructions}>
    Read all about us
    </Text>
  </View>
);

export default About;
