import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';

export default class HistoricRatesItem extends PureComponent {
  render() {
    const { date, currency, buyRate, sellRate, img } = this.props;
    return (
      <View style={styles.bodyRowView}>
        <View style={styles.dateColumn}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.currDataView}>
          <View style={styles.currItemView}>
            <Image source={img} style={styles.currImage}/>
            <Text style={styles.ratesText}>{currency}</Text>
          </View>
        </View>
        <View style={styles.ratesItemView}>
          <Text style={styles.ratesText}>{buyRate} - {Number(buyRate) + 1}</Text>
        </View>
        <View style={styles.ratesItemView}>
          <Text style={styles.ratesText}>{sellRate} - {Number(sellRate) + 1}</Text>
        </View>
      </View>
    );
  }
}
