import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';
import Images from '@assets/images';

export default class HistoricRatesHeader extends PureComponent {
  render() {
    return (
      <View style={styles.tableHeading}>
        <View style={styles.dateColumn}>
          <Text style={styles.headerTextRow}>Date</Text>
        </View>
        <View style={styles.currencyColumn}>
          <Text style={styles.headerTextRow}>Currency</Text>
        </View>
        <View style={styles.buyRangeColumn}>
          <Image source={Images.ngr} style={styles.headerImage} />
          <Text style={styles.headerTextRow}>Buy Range</Text>
        </View>
        <View style={styles.sellRangeColumn}>
          <Image source={Images.ngr} style={styles.headerImage} />
          <Text style={styles.headerTextRow}>Sell Range</Text>
        </View>
      </View>
    );
  }
}
