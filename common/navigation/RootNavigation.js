import React from 'react';
import { Easing, TouchableHighlight, View, Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
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


export const DrawerStack = DrawerNavigator({
  Rates: { screen: RatesScreen },
  'About ABCON': { screen: AboutScreen },
  'Historic rates': { screen: HistoricRatesScreen },
  Converter: { screen: ConverterScreen },
  'Other rates': { screen: OtherRatesScreen },
  'Market News': { screen: MarketNewsScreen },
  'Contact us': { screen: ContactUsScreen },
},
{
  gesturesEnabled: false,
  drawerWidth: 420,
  drawerBackgroundColor: 'transparent',
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
      height: 80
    },
    headerTitle: (
      <View>
        <TouchableHighlight
          underlayColor='#015b00'
          onPress={() => navigation.navigate('DrawerClose')}>
          <Icon name="arrow-back" type="MaterialIcons" style={styles.backIcon}></Icon>
        </TouchableHighlight>
      </View>
    ),
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerRight: drawerButton(navigation),
    headerTitleStyle: {
      fontFamily: 'montserrat',
      fontWeight: 'normal',
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
