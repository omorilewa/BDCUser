import React from 'react';
import {
  Easing,
  TouchableHighlight,
  ImageBackground,
  View,
  Dimensions
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
  <ImageBackground
    source={Images.background}
    style={{ width: Dimensions.get('window').width }}
  >
    <View style={styles.drawerView}>
      <DrawerItems {...props} />
    </View>
  </ImageBackground>
  ;

export const DrawerStack = DrawerNavigator({
  Rates: { screen: RatesScreen },
  'About ABCON': { screen: AboutScreen },
  'Historic rates': { screen: HistoricRatesScreen },
},{
  gesturesEnabled: false,
  drawerWidth: 420,
  drawerBackgroundColor: 'black',
  contentComponent: CustomDrawerContentComponent,
  drawerPosition: 'right',
  contentOptions: {
    labelStyle: styles.drawerText,
    itemStyle: styles.item
  }
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
