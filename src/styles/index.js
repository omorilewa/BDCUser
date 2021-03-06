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
    fontFamily: 'OpenSans-Regular',
  },
  imageStyle: {
    width: 145,
    height: 30
  },
  headerTitleStyle: {
    flex: 1,
    alignItems:'center'

  },
  sbsc: {
    width: 80,
    height: 45,
    marginTop: 5
  },
  technoverse: {
    width: 60,
    height: 48,
    marginTop: 5
  },
  logo: {
    width: 50,
    height: 47,
    marginTop: 5
  },
  bgImageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  outerCover: {
    paddingRight: '15%',
    paddingLeft: '15%',
    paddingBottom: '5%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    width:'100%',
  },
  flexDrawer: {
    flex: 1
  },
  logoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  hr: {
    borderBottomWidth: 3,
    borderBottomColor: '#4b5649',
    height: 20,
    width: 50
  },
  transparent: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  item: {
    width: '100%',
    borderBottomColor: '#1e331a',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
  },
  brand: {
    flex: 1,
    marginTop: '90%',
    alignItems: 'center'
  },
  whiteLight: {
    color: '#4b5649'
  },
  imagebg: {
    width: '100%',
    height: '100%',
  },
  drawerView: {
    backgroundColor:'rgba(0,0,0,.7)',
    height: '100%',
  }
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
  loaderView: {
    marginTop: '35%'
  },
  errorView: {
    marginTop: '35%',
    alignItems: 'center',
  },
  headerImage: {
    width: 20,
    height: 10,
    marginRight: 5,
    marginTop: 5
  },
  imagebg: {
    width: '100%',
    height: '80%',
  },
  currView: {
    width: '100%',
    height: '80%'
  },
  bgImageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  flexDrawer: {
    flex: 1
  },
  resize: {
    // flex: 1,
    resizeMode: 'cover'
  },
  transparent: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  fullWidth: {
    width: '100%',
    marginBottom: 5
  },
  powered: {
    flexDirection: 'row',
    paddingLeft: '15%',
    paddingRight: '15%',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pText: {
    color: '#4b5649',
    fontSize: 10,
    borderWidth: 0.5,
    borderLeftColor: '#4b5649',
    borderBottomColor: '#4b5649',
    borderRightColor: '#4b5649',
    borderTopColor: '#4b5649',
    marginRight: 10,
    marginLeft: 10,
    padding: 3,
    height: 22
  },
  footer: {
    color: 'white',
    fontSize: 10,
  },
  vr: {
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    height: 15,
  },
  cut: {
    width: '100%'
  },
  calcView: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    borderRadius:20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  outerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  outerPadding: {
    paddingRight: 8,
    paddingLeft: 8
  },
  img: {
    width: 25,
    height: 33
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    color: 'white',
    marginTop: 8
  },
  subText: {
    fontSize: 14,
    marginTop: 3,
    color: '#9fa99d',
    fontFamily: 'OpenSans-Regular'
  },
  color: {
    color: 'white',
    marginTop: 13,
    fontFamily: 'OpenSans-Regular'
  },
  header: {
    paddingRight: 9,
    paddingLeft: 9,
    marginTop: 10
  },
  row: {
    flexDirection: 'row'
  },
  date: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  currency: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buyRate: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sellRate:{
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  currImage: {
    width: 25,
    height: 15,
    marginRight: 5,
  },
  margin: {
    marginTop: 6,
    paddingLeft: 18,
    paddingRight: 18,
    justifyContent: 'space-between'
  },
  rateText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  noRatesText: {
    fontSize: 18,
    color: 'white'
  },
  noRatesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150
  },
  white: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans-Italic',
  },
  morning: {
    backgroundColor: '#006FFF',
  },
  afternoon: {
    backgroundColor: '#FF9E3D',
  },
  evening: {
    backgroundColor: '#FF0000',
  },
  indicator: {
    width: 14,
    height: 14,
    marginTop: 2,
    marginRight: 3,
    borderRadius: 4,
  }
});

export const GeneralStyles = StyleSheet.create({
  calcView: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    borderRadius:20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  pickerWrapper: {
    width: '35%',
    borderBottomColor: 'black',
  },
  arrow: {
    width: 40,
    height: 35,
    marginTop: 20
  },
  icon: {
    fontSize: 40
  },
  header: {
    backgroundColor: '#2c681a',
    height: 60,
    width: '100%',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  resultView: {
    height: 35,
    marginTop: 12,
    borderWidth: 0.5,
    width: '50%',
    alignItems: 'center'
  },
  yellow: {
    color: '#FFFC00',
    marginLeft: 15,
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  resultText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'OpenSans-SemiBold'
  },
  formLabel: {
    color: '#3E3E3E',
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 7,
  },
  item: {
    borderBottomColor: 'black',
    width: '85%'
  },
  items: {
    marginBottom: 15,
    flexDirection: 'row',
    borderBottomColor: 'black',
    width: '100%'
  },
  select: {
    fontSize: 16,
    marginTop: 10
  },
  modalContent: {
    backgroundColor:'transparent',
  },
  buttonBody: {
    marginTop: 10,
    height: 40,
    backgroundColor: '#19B01D',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  formStyle: {
    backgroundColor: 'white',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  converterView: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  outerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  outerPadding: {
    height: '100%',
    backgroundColor:'rgba(0,0,0,.7)'
  },
  calcImg: {
    width: 22,
    height: 28
  },
  wrapperImage: {
    width: '100%',
    height: '100%',
  },
});

export const AboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  scrollContainer: {
    height: '70%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 10
  },
  cta: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'OpenSans-SemiBold'
  },
  readMoreButton: {
    marginTop: 15,
    backgroundColor: '#02a901',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%'
  },
  aboutContent: {
    justifyContent: 'center',
    height: 450,
    marginTop: 10,
    backgroundColor: '#105410',
    borderRadius: 30,
    width: '92%',
    opacity: 0.8,
  },
  aboutText: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    fontFamily: 'OpenSans-Regular'
  }
});

export const HistoricRatesStyles = StyleSheet.create({
  arrow: {
    fontSize: 8,
    marginBottom: 1,
    color: 'white',
  },
  buttonText: {
    width: 70,
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    marginBottom: 3,
    color: 'white',
  },
  dropdown: {
    width: 100,
    margin: 0,
    flexDirection:'row'
  },
  dropdowntext: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
  filterText: {
    fontSize: 12,
    color: 'white',
    marginRight: 8,
    fontFamily: 'OpenSans-Italic'
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 12,
    paddingRight: 8
  },
  hr: {
    flex: 1,
    borderBottomColor: '#9c9e9f',
    borderBottomWidth: 0.8,
    width: 100,
  },
  modal: {
    flex: 1,
    width: 100,
    marginBottom: 0
  },
  modalView: {
    width: 100,
    alignItems:'center',
    flexDirection:'row',
  },
  subText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'OpenSans-Regular'
  },
  superText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  tableHeading: {
    flexDirection: 'row',
    marginTop: 15,
  },
  headerTextRow: {
    color: 'white',
    fontFamily: 'OpenSans-Italic',
    fontSize: 13,
  },
  wrapper: {
    height: '100%',
    width: '100%',
  },
  textView: {
    width: '100%',
    paddingLeft: 13,
    paddingRight: 18,
  },
  headerImage: {
    width: 20,
    height: 10,
    marginRight: 5,
  },
  bodyRowView: {
    flexDirection: 'row',
  },
  bottomMargin: {
    marginBottom: 10,
    width: '70%'

  },
  bodyDataItem: {
    marginTop: 10,
    flex: 1
  },
  ratesItemView: {
    width: '35%',
    alignItems: 'center',
  },
  listView: {
    paddingBottom: 80,
  },
  currItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%'

  },
  flex: {
    flex: 1,
    paddingLeft: 13,
    paddingRight: 18,
  },
  ratesText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
    marginBottom: 5
  },
  dateText: {
    fontFamily: 'OpenSans-Italic',
    color: 'yellow',
    marginLeft: 5
  },
  currImage: {
    width: 20,
    height: 10,
    marginRight: 5,
  },
  dateHeading:{
    width: '30%',
  },
  dateColumn: {
    width: '30%',
    marginBottom: 15,
    marginTop: 5,
    borderLeftWidth: 1,
    borderLeftColor: 'yellow'
  },
  currencyColumn: {
    width: '20%'
  },
  buyRangeColumn: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    marginLeft: 0
  },
  sellRangeColumn: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderView: {
    marginTop: '50%',
  },
  errorView: {
    marginTop: '50%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  noDataView: {
    height: 400,
    alignItems: 'center',
  },
  noDataText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 160
  }
});
