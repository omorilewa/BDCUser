import React from 'react';
import { Text, View } from 'react-native';
import { StubStyles as styles } from '../styles';

const ContactUs = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
    Contact us
    </Text>
    <Text style={styles.instructions}>
    Send a message
    </Text>
  </View>
);

export default ContactUs;
