import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Query } from 'react-apollo';
import { HistoricRatesStyles as styles } from '../styles';
import { HistoricRatesBody, Whoops } from '.';
import { GET_LOCATION } from '../operations';
import { getLocationId } from '../dataApi';

export default class HistoricRatesTable extends Component {

  render() {
    return (
      <View style={styles.flex}>
        <Query query={GET_LOCATION}>
          {({ data, error, loading }) => {
            if (loading) {
              return (
                <View style={styles.loaderView}>
                  <ActivityIndicator size="large" />
                </View>
              );
            } else if (error) {
              const isNetworkError = error.toString().includes('Network error');
              return (
                <View style={styles.errorView}>
                  <Whoops message={isNetworkError ?
                    'Network Error!' :
                    'Error while fetching locations'}
                  />
                </View>
              );
            }
            if (data) {
              const locationName = this.props.navigation.state.routeName;
              const { locations } = data;
              const locationId = getLocationId(locations, locationName);
              return <HistoricRatesBody locationId={locationId} />;
            }
          }}
        </Query>
      </View>
    );
  }
}

