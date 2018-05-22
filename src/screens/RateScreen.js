import React, { Component } from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';
import { Icon } from 'native-base';
import { RateScreenStyles as styles } from '../styles';
import { TabNav, RatesDisplay } from '../components';
// import { MainTabNavigator, CustomTabNavigator } from '../navigation';

import Images from '@assets/images';

export default class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <ImageBackground
        source={Images.background}
        style={styles.imagebg}
      >
        <View style={{ height: '25%' }}>
          <Text>Yooo</Text>
        </View>
        <View>
          <ImageBackground
            source={Images.tabBg}
            resizeMode="cover"
            style={styles.imagebg}
          >
            <TabNav
              screenOne={RatesDisplay}
              screenTwo={RatesDisplay}/>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}
