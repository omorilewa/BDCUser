import { StyleSheet } from 'react-native';

export const NavStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  icon: {
    fontSize: 40,
    color: '#7fab7f',
    marginRight: 10
  },
  backIcon: {
    fontSize: 40,
    color: '#7fab7f',
    marginLeft: '1%'
  },
  drawerText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'normal',
    fontFamily: 'OpenSans-Regular'
  },
  item: {
    borderBottomColor: '#1e331a',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
  },
  imagebg: {
    width: '100%',
    height: '100%',
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

export const RateScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  imagebg: {
    width: '100%',
    height: '100%',
  },
  currView: {
    width: '100%',
    height: '80%'
  },
  cut: {
    width: '100%'
  }
});
