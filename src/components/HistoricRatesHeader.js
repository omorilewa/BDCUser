import React, { PureComponent, Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';
import Images from '@assets/images';

export default class HistoricRatesHeader extends PureComponent {
  render() {
    return (
      <View style={styles.tableHeading}>
        <Fragment>
          <Text style={styles.headerTextRow}>Date</Text>
        </Fragment>
        <Fragment>
          <Text style={styles.headerTextRow}>Currency</Text>
        </Fragment>
        <View style={styles.headerRangeView}>
          <Image source={Images.ngr} style={styles.headerImage} />
          <Text style={styles.headerTextRow}>Buy Range</Text>
        </View>
        <View style={styles.headerRangeView}>
          <Image source={Images.ngr} style={styles.headerImage} />
          <Text style={styles.headerTextRow}>Sell Range</Text>
        </View>
      </View>
    );
  }
}
