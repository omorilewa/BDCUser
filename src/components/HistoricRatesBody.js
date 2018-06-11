import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import { HistoricRatesStyles as styles } from '../styles';
import { Whoops, ComputedRatesInterceptor } from '.';
import { GET_COMPUTED_RATES } from '../operations';
import { sortRatesByDate } from '../dataApi';

export default class HistoricRatesBody extends PureComponent {
  state = {
    locationId: this.props.locationId,
  }

  render() {
    const { locationId } = this.state;

    return (
      <Query query={GET_COMPUTED_RATES} variables={{ locationId }}>
        {({ data, loading, error }) => {
          if (error) {
            const isNetworkError = error.toString().includes('Network error');
            return (
              <View style={styles.errorView}>
                <Whoops message={isNetworkError ?
                  'Network Error!' :
                  'Error while fetching rates'}
                />
              </View>
            );
          } else if (loading) {
            return (
              <View style={styles.loaderView}>
                <ActivityIndicator size="large" />
              </View>
            );
          }
          if (data) {
            const ratesSortedByDate = sortRatesByDate(data.computedRates);
            return <ComputedRatesInterceptor ratesSortedByDate={ratesSortedByDate} />;
          }
        }}
      </Query>
    );
  }
}
