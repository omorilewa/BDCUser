import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';
import { TabNav, HistoricRatesTable } from '.';

class HistoricRates extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.textView}>
          <Text style={styles.superText}>
            Parallel Market Historic Rates Table
          </Text>
          <Text style={styles.subText}>
            Rates are updated 3 times daily by BDCs in these locations.
          </Text>
        </View>
        <TabNav
          screenOne={HistoricRatesTable}
          screenTwo={HistoricRatesTable}
          screenThree={HistoricRatesTable}
          screenFour={HistoricRatesTable}
          screenFive={HistoricRatesTable}
        />
      </View>
    );
  }
}

export default HistoricRates;
