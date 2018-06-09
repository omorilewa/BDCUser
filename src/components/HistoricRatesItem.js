import React, { Component, Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import { HistoricRatesStyles as styles } from '../styles';
import { getImageFromCurrency, trimRates } from '../dataApi';

export default class HistoricRatesItem extends Component {
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
    const sizedRates = trimRates(ratesPerDate);
    const formattedDate = moment(date).format('ddd, MMM D');

    return (
      <Fragment>
        <View style={styles.bodyRowView}>
          <View style={styles.dateColumn}>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>
          <Fragment>
            <View style={styles.currDataView}>
              {sizedRates.map((rate, index) => (
                !!rate && <View style={styles.currItemView} key={index}>
                  <Image source={getImageFromCurrency(rate.currency)} style={styles.currImage}/>
                  <Text style={styles.ratesText}>{rate.currency}</Text>
                </View>
              ))}
            </View>
            <View style={styles.ratesItemView}>
              {sizedRates.map((rate, index) => (
                !!rate && <Text key={index} style={styles.ratesText}>{rate.buyRate}</Text>
              ))}
            </View>
            <View style={styles.ratesItemView}>
              {sizedRates.map((rate, index) => (
                !!rate && <Text key={index} style={styles.ratesText}>{rate.sellRate}</Text>
              ))}
            </View>
          </Fragment>
        </View>
      </Fragment>
    );
  }
}
