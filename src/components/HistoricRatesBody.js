import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesItem } from '.';
import MockData from '../dataApi/mockData.json';
import Images from '@assets/images';

export default class HistoricRatesBody extends PureComponent {
  render() {
    return (
      <View style={styles.bodyDataItem}>
        <FlatList
          data={MockData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            <View key={index}>
              <HistoricRatesItem
                date={MockData[0].date}
                img={Images.usd}
                currency={MockData[0].currency}
                buyRate={MockData[0].buyRate}
                sellRate={MockData[0].sellRate}
              />
            </View>
          }
        />
      </View>
    );
  }
}
