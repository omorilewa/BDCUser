import React from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';
import { RateScreenStyles as styles } from '../styles';
import { TabNav, RatesDisplay } from '.';
import Images from '@assets/images';

const Rates = () => (
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

export default Rates;
