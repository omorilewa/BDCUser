import React from 'react';
import { Image, Text, View } from 'react-native';
import { RateScreenStyles as styles } from '../styles';
import { TabNav, RatesDisplay, ContentWrapper } from '.';
import Images from '@assets/images';

const Rates = () => (
  <ContentWrapper>
    <View style={{ flex: 1 }}>
      <View style={styles.outerPadding}>
        <View style={styles.fullWidth}>
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
      <View style={styles.flexDrawer}>
        <View style={styles.bgImageView}>
          <Image style={styles.resize}
            source={Images.tabBg}
          />
        </View>
        <View style={styles.transparent}>
          <TabNav
            screenOne={RatesDisplay}
            screenTwo={RatesDisplay}
            screenThree={RatesDisplay}
            screenFour={RatesDisplay}
            screenFive={RatesDisplay} />
        </View>
      </View>
      <View style={styles.powered}>
        <Text style={styles.pText}>Powered By:</Text>
        <Text style={styles.footer}>ABCON</Text>
        <View style={styles.vr}></View>
        <Text style={styles.footer}>SBSC</Text>
        <View style={styles.vr}></View>
        <Text style={styles.footer}>Technoverse</Text>
      </View>
    </View>
  </ContentWrapper>
);

export default Rates;
