import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesItem } from '.';
import { Query } from 'react-apollo';
import { GET_COMPUTED_RATES } from '../operations';
import { sortRatesByDate } from '../dataApi';

export default class HistoricRatesBody extends PureComponent {

  render() {
    return (
      <Query query={GET_COMPUTED_RATES}>
        {({ data, loading, error }) => {
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
