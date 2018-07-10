import React, { PureComponent, Fragment } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import moment from 'moment';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesItem, NoData } from '.';
import HistoricRatesHeader from './HistoricRatesHeader';
import { sortRatesByDate, spread2DArray } from '../dataApi';

class ComputedRatesInterceptor extends PureComponent {
  state = {
    ratesSortedByDate: this.props.ratesSortedByDate
  }

  componentDidMount() {
    this.filterRatesData(this.state.ratesSortedByDate, 'All time');
  }

  filterRatesData = (initialData, filterBy) => {
    let result;
    switch (filterBy) {
      case ('Today'):
        result = initialData.filter((element) => {
          return moment().isSame((element.date), 'day') && element;
        });
        break;
      case ('This week'):
        result = initialData.filter((element) => {
          const isThisWeek = element.date >= moment().startOf('week').format('YYYY-MM-DD') &&
          element.date <= moment().endOf('week').format('YYYY-MM-DD');
          return isThisWeek && element;
        });
        break;
      case ('This month'):
        result = initialData.filter((element) => {
          const isThisMonth = element.date >= moment().startOf('month').format('YYYY-MM-DD') &&
          element.date <= moment().endOf('month').format('YYYY-MM-DD');
          return isThisMonth && element;
        });
        break;
      default:
        result = initialData;
        break;
    }
    return sortRatesByDate(result);
  };

  onClickDropDown = (value) => {
    const ratesDataCollection = spread2DArray(this.props.ratesSortedByDate);
    this.setState(() => ({
      ratesSortedByDate: this.filterRatesData(ratesDataCollection, value)
    }));
  }

  render() {
    const { ratesSortedByDate } = this.state;

    return (
      <Fragment>
        <View style={styles.filterView}>
          <Text style={styles.filterText}>Showing: </Text>
          <TouchableOpacity onPress={() => { this.dropDown && this.dropDown.show(); }}>
            <View style={styles.modalView}>
              <ModalDropdown ref={(el) => { this.dropDown = el; }}
                options={['All time', 'This week', 'Today', 'This month']}
                defaultValue={'All time'}
                style={styles.modal}
                textStyle={styles.buttonText}
                dropdownStyle={styles.dropdown}
                dropdownTextStyle={styles.dropdowntext}
                adjustFrame={(style) => {
                  style.height = 148;
                  style.top = 260;
                  return style;
                }}
                onSelect={(index, value) => { this.onClickDropDown(value); }}
              />
              <Text style={styles.arrow}>▼</Text>
            </View>
            <View style={styles.hr}></View>
          </TouchableOpacity>
        </View>
        <HistoricRatesHeader />
        <View style={styles.bodyDataItem}>
          <FlatList
            data={ratesSortedByDate}
            contentContainerStyle={styles.listView}
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
      </Fragment>
    );
  }
}

export default ComputedRatesInterceptor;


