import React, { PureComponent, Fragment } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesItem, Whoops, NoData } from '.';
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
            return (
              <View style={styles.bodyDataItem}>
                <FlatList
                  data={ratesSortedByDate}
                  ListEmptyComponent={NoData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                    <Fragment key={index}>
                      <HistoricRatesItem
                        ratesPerDate={item}
                        date={item[0].date}
                      />
                    </Fragment>
                  }
                />
              </View>
            );
          }
        }}
      </Query>
    );
  }
}
