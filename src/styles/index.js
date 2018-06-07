import { StyleSheet } from 'react-native';

export const NavStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  icon: {
    fontSize: 50,
    color: '#7fab7f',
    marginRight: 10
  },
  backIcon: {
    fontSize: 50,
    color: '#7fab7f',
    marginLeft: '1%'
  },
  drawerText: {
    fontSize: 17,
    color: 'white',
  },
  item: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
  },
});

export const StubStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

