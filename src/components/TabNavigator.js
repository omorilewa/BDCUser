import React from 'react';
import { TabNavigator } from 'react-navigation';

const Tabnavigator = ({ screenOne, screenTwo, screenThree, screenFour, screenFive }) => {
  const CustomTabNavigator = TabNavigator({
    Lagos: { screen: screenOne },
    Abuja: { screen: screenTwo },
    Portharcourt: { screen: screenThree },
    Kano: { screen: screenFour },
    Onitsha: { screen: screenFive },
  }, {
    tabBarOptions: {
      upperCaseLabel: false,
      titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      labelStyle: {
        fontSize: 13,
        fontFamily: 'OpenSans-Regular',
      },
      tabStyle: {
        justifyContent: 'center',
        margin: 0,
      },
      indicatorStyle: {
        backgroundColor: '#FFFC00',
      },
      style: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        paddingBottom: 6,
        paddingTop: 6,
        borderBottomColor: 'white',
        height: 60,
      }
    },
  });
  CustomTabNavigator.navigationOptions = {
    header: null
  };
  return <CustomTabNavigator />;
};

export default Tabnavigator;
