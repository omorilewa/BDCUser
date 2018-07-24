
import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { RateScreenStyles as styles } from '../styles';
import { Query } from 'react-apollo';
import { sortTodayRates } from '../dataApi';
import { GET_TODAY_RATES } from '../operations';
import { RatesDisplayItem, Whoops } from '.';
import Images from '@assets/images';
import moment from 'moment';

export default class RatesDisplay extends Component {
  render() {
    const formattedDate = moment().format('ddd. MMM D');
    return (
      <View>
        <View style={[styles.row, styles.header]}>
          <View style={styles.date}>
            <Text style={styles.white}>{formattedDate}</Text>
          </View>
          <View style={styles.currency}>
            <Text style={styles.white}>Currency</Text>
          </View>
          <View style={styles.buyRate}>
            <Image source={Images.ngr} style={styles.headerImage} />
            <Text style={styles.white}>Buy Rate</Text>
          </View>
          <View style={styles.sellRate}>
            <Image source={Images.ngr} style={styles.headerImage} />
            <Text style={styles.white}>Sell Rate</Text>
          </View>
        </View>
        <Query query={GET_TODAY_RATES}>
          {({ data, loading, error }) => {
            if (error) {
              const message = error.toString().includes('Network') ?
                'Please check your internet connection' :
                'An error occured. Retry.';
              return (
                <View style={styles.errorView}>
                  <Whoops message={message}/>
                </View>
              );
            }
            if (loading) {
              return (
                <View style={styles.loaderView}>
                  <ActivityIndicator size="large" />
                </View>
              );
            }
            if (data) {
              let locationtoUse;
              const location = this.props.navigation.state.key;
              locationtoUse = location;
              if (location  == 'PH') {
                locationtoUse = 'Port-Harcourt';
              }
              const transformedData = sortTodayRates(data)[locationtoUse] || {};
              return (
                <RatesDisplayItem rates={transformedData} />
              );
            }
          }}
        </Query>
      </View>
    );
  }
}
