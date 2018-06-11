import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import { HistoricRatesStyles as styles } from '../styles';
import { getImageFromCurrency, trimRates } from '../dataApi';

export default class HistoricRatesItem extends PureComponent {
  state = {
    ratesPerDate: this.props.ratesPerDate,
    date: this.props.date
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.ratesPerDate !== prevState.ratesPerDate) {
      return {
        ratesPerDate: nextProps.ratesPerDate,
      };
    }
    return null;
  }

  render() {
    const { ratesPerDate, date } = this.state;
    const trimmedRates = trimRates(ratesPerDate);
    const formattedDate = moment(date).format('ddd, MMM D');

    return (
      <View style={styles.bodyRowView}>
        <View style={styles.dateColumn}>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
        <View style={styles.bottomMargin}>
          {trimmedRates.map((rate, index) =>
            <View style={styles.bodyRowView} key={index}>
              <View style={styles.currItemView}>
                <Image source={getImageFromCurrency(rate.currency)} style={styles.currImage} />
                <Text style={styles.ratesText}>{rate.currency}</Text>
              </View>
              <View style={styles.ratesItemView}>
                <Text key={index} style={styles.ratesText}>{rate.buyRate}</Text>
              </View >
              <View style={styles.ratesItemView}>
                <Text key={index} style={styles.ratesText}>{rate.sellRate}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}
