import React from 'react';
import { Text, View } from 'react-native';
import { StubStyles as styles } from '../styles';

const MarketNews = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
    Checkout latest market news
    </Text>
    <Text style={styles.instructions}>
    Click here for market news
    </Text>
  </View>
);

export default MarketNews;
