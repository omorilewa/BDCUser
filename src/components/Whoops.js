import React, { PureComponent, Fragment } from 'react';
import { Text } from 'react-native';
import { HistoricRatesStyles as styles } from '../styles';

export default class Whoops extends PureComponent {
  render() {
    return (
      <Fragment>
        <Text style={styles.errorText}>{this.props.message}</Text>
      </Fragment>
    );
  }
}
