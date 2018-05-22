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

type AboutProps = {
};

const About = (props: AboutProps) => (
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
