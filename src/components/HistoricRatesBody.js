import React, { PureComponent } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesItem } from '.';
import { GET_COMPUTED_RATES } from '../operations';
import { sortRatesByDate } from '../dataApi';
import Whoops from './Whoops';

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
            return <Whoops message="Error while fetching rates" />;
          } else if (loading) {
            return (
              <View style={styles.loaderView}>
                <ActivityIndicator size="large" />
              </View>
            );
          }
          if (data) {
            const transformedData = sortRatesByDate(data.computedRates);
            return (
              <View style={styles.bodyDataItem}>
                <FlatList
                  data={transformedData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                    <View key={index}>
                      <HistoricRatesItem
                        ratesPerDate={item}
                        date={item[0].date}
                      />
                    </View>
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
