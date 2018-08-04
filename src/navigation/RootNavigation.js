import React from 'react';
import {
  Easing,
  TouchableHighlight,
  ImageBackground,
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'native-base';
import {
  RatesScreen,
  OtherRatesScreen,
  HistoricRatesScreen,
  ConverterScreen,
  AboutScreen,
  MarketNewsScreen,
  ContactUsScreen
} from '../screens';
import { NavStyles as styles } from '../styles';

import Images from '@assets/images';


const drawerButton = (navigation) =>
  <TouchableHighlight
    underlayColor='#015b00'
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen');
      } else {
        navigation.navigate('DrawerClose');
      }
    }
    }>
    <Icon name="ios-menu" style={styles.icon} />
  </TouchableHighlight>;

const CustomDrawerContentComponent = (props) =>
  <View style={styles.flexDrawer}>
    <View style={styles.bgImageView}>
      <Image style={styles.bgImage}
        source={Images.background}
      />
    </View>
    <View style={styles.transparent}>
      <View style={styles.drawerView}>
        <DrawerItems {...props} activeBackgroundColor='rgba(0,0,0,.5)' />
        <View style={styles.outerCover}>
          <View style={styles.brand}>
            <Text style={styles.whiteLight}>Powered By:</Text>
            <View style={styles.hr}></View>
          </View>
          <View style={styles.logoView}>
            <Image style={styles.logo} source={Images.logo} />
            <Image style={styles.sbsc} source={Images.sbsc} />
            <Image style={styles.technoverse} source={Images.techno} />
          </View>
        </View>
      </View>
    </View>
  </View>
  ;

export const DrawerStack = DrawerNavigator({
  Rates: { screen: RatesScreen },
  'About ABCON': { screen: AboutScreen },
  'Historic rates': { screen: HistoricRatesScreen },
},{
  gesturesEnabled: false,
  drawerBackgroundColor: 'black',
  contentComponent: CustomDrawerContentComponent,
  drawerWidth: Dimensions.get('window').width - 70,
  drawerPosition: 'right',
  contentOptions: {
    labelStyle: styles.drawerText,
    itemStyle: styles.item,
  },
  navigationOptions: () => ({
    headerTitle: (
      <View style={styles.headerTitleStyle}>
        <Image
          style={styles.imageStyle}
          source={Images.naijabdc}
        />
      </View>
    ),
    headerTintColor: 'white',
    gesturesEnabled: false,
  })
});

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack },
}, {
  headerMode: 'none',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#015b00',
      paddingLeft: 10,
      height: 60
    },
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerRight: drawerButton(navigation),
    headerTitleStyle: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
      color: '#FFFC00'
    },
  })
});

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    easing: Easing.step0
  },
});

export const PrimaryNavigator = StackNavigator({
  DrawerStack: { screen: DrawerNavigation },
}, {
  // Default config for all screens
  headerMode: 'float',
  title: 'DrawerStack',
  initialRouteName: 'DrawerStack',
  transitionConfig: noTransitionConfig
});
