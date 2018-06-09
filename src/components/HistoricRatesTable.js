import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Query } from 'react-apollo';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesHeader, HistoricRatesBody, Whoops } from '.';
import { GET_LOCATION } from '../operations';

export default class HistoricRatesTable extends Component {
  static propTypes = {
  }

  state = {
    ratesData: []
  }

  onClickDropDown = () => {
    this.setState(() => ({
      ratesData: []
    }));
  }

  render() {
    return (
      <Fragment>
        <View style={styles.filterView}>
          <Text style={styles.filterText}>Showing: </Text>
          <TouchableOpacity onPress={() => { this.dropDown && this.dropDown.show(); }}>
            <View style={styles.modalView}>
              <ModalDropdown ref={(el) => { this.dropDown = el; }}
                options={['All time', 'Last 7 days', 'Today', 'This month']}
                defaultValue={'All time'}
                style={styles.modal}
                textStyle={styles.buttonText}
                dropdownStyle={styles.dropdown}
                dropdownTextStyle={styles.dropdowntext}
                adjustFrame={(style) => {
                  style.height = 88;
                  style.top = 144;
                  return style;
                }}
                onSelect={() => { this.onClickDropDown(); }}
              />
              <Text style={styles.arrow}>▼</Text>
            </View>
            <View style={styles.hr}></View>
          </TouchableOpacity>
        </View>
        <HistoricRatesHeader />
        <ScrollView>
          <Query query={GET_LOCATION}>
            {({ data, error, loading }) => {
              if (loading) {
                return (
                  <View style={styles.loaderView}>
                    <ActivityIndicator size="large" />
                  </View>
                );
              } else if (error) {
                return <Whoops message="Error while fetching locations" />;
              }
              if (data) {
                const { locations } = data;
                return <HistoricRatesBody locations={locations} />;
              }
            }}
          </Query>
        </ScrollView>
      </Fragment>
    );
  }
}

