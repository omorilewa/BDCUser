import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';

export default class NoData extends PureComponent {
  render() {
    return (
      <View style={styles.noDataView}>
        <Text
          style={
            [
              styles.errorText,
              styles.noDataText
            ]
          }>
          No data available for this location
        </Text>
      </View>
    );
  }
}
