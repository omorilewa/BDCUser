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

type ContactUsProps = {
};

const ContactUs = (props: ContactUsProps) => (
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
