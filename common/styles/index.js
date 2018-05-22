import { StyleSheet } from 'react-native';

export const NavStyles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    fontSize: 50,
    color: '#7fab7f',
    marginRight: 10
  },
  backIcon: {
    fontSize: 60,
    color: '#7fab7f',
    marginLeft: '1%'
  },
  drawerText: {
    fontSize: 18,
    color: 'white',
  },
  item: {
    marginTop: '5%',
    borderBottomColor: 'red',
    borderTopColor: 'red'
  }
});
