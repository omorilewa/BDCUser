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
    <View style={styles.outerPadding}>
      <View style={styles.outerView}>
        <View style={styles.calcView}>
          <Image
            style={styles.img}
            source={Images.converter}/>
        </View>
      </View>
      <View style={{ height: '20%' }}>
        <Text style={styles.headerText}>Bureau De Change FX Rates by Location</Text>
        <Text style={styles.subText}>Rates are updated 3 times daily by BDCs in these locations.</Text>
        <Text style={styles.color}>Rate colour indicator:</Text>
        <View style={[styles.row, styles.margin]}>
          <View style={styles.row}>
            <View style={[styles.indicator, styles.morning]}></View>
            <Text style={styles.white}>Morning</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.indicator, styles.afternoon]}></View>
            <Text style={styles.white}>Afternoon</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.indicator, styles.evening]}></View>
            <Text style={styles.white}>Evening</Text>
          </View>
        </View>
      </View>
    </View>
    <ImageBackground
      source={Images.tabBg}
      resizeMode="cover"
      style={styles.imagebg}
    >
      <TabNav
        screenOne={RatesDisplay}
        screenTwo={RatesDisplay}/>
    </ImageBackground>
  </ImageBackground>
);

export default Rates;
