import React, { Component, Fragment } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { RateScreenStyles as styles } from '../styles';
import { getImageFromCurrency } from '../dataApi';

export default class Rat extends Component {
  state = {
    rates: this.props.rates,
    date: this.props.date
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rates !== prevState.rates) {
      return {
        rates: nextProps.rates,
      };
    }
    return null;
  }

  render() {
    const { rates } = this.state;
    return (
      <Fragment>
        {Object.keys(rates).length ?
          <View>
            {Object.values(rates).map((value, index) =>
              <View key={index}>
                <FlatList
                  data={value}
                  onEndReachedThreshold={0.5}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={[styles.row, styles.margin]}>
                      <View style={[styles.row, styles.date]}>
                        {item.periodOfTheDay === 'MORNING' && <View style={[styles.indicator, styles.morning]}></View>}
                        {item.periodOfTheDay === 'AFTERNOON' && <View style={[styles.indicator, styles.afternoon]}></View>}
                        {item.periodOfTheDay === 'EVENING' && <View style={[styles.indicator, styles.evening]}></View>}
                      </View>
                      <View style={styles.currency}>
                        <Image source={getImageFromCurrency(item.currency)} style={styles.currImage} />
                        <Text style={styles.rateText}>{item.currency}</Text>
                      </View>
                      <View style={styles.sellRate}>
                        <Text style={styles.rateText}>{item.sellRate}</Text>
                      </View>
                      <View style={styles.buyRate}>
                        <Text style={styles.rateText}>{item.buyRate}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            )}
          </View> :
          <View style={styles.noRatesWrapper}>
            <Text style={styles.noRatesText}>No rates available for this location</Text>
          </View>}
      </Fragment>
    );
  }
}
