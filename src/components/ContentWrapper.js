import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableHighlight,
  Text,
  Picker,
} from 'react-native';
import Modal from 'react-native-modal';
import { Input, Item } from 'native-base';
import { GeneralStyles as styles } from '../styles';
import Images from '@assets/images';
import { getItem } from '../util';
import { conversionRate } from '../dataApi';

const PickerItem = Picker.Item;
class ContentWrapper extends Component {

  state = {
    modalVisible: false,
    lhsPickerValue: 'NGN',
    rhsPickerValue: 'USD',
    ratesData: {},
    text: '',
    conversionResult: '',
  }

  showModal = async () => {
    const TodaysRates = await getItem('TodaysRates');
    const ratesData = JSON.parse(TodaysRates);
    this.setState(() => ({
      modalVisible: true,
      ratesData,
      conversionResult: ''
    }));
  }

  convertRate = (fromCurrency, toCurrency, inputRate) => {
    const { ratesData } = this.state;
    const currencyToConvert = fromCurrency === 'NGN' ? toCurrency : fromCurrency;
    const result = conversionRate(ratesData, currencyToConvert, 'buyRate');
    if (result !== 'Not Found') {
      const conversionResult = fromCurrency === 'NGN' ?
        (inputRate / result) :
        (result * inputRate);
      this.setState(() => ({ conversionResult }));
    } else {
      this.setState(() => ({ conversionResult: 'No buy rate exists yet' }));
    }
  }

  onChange = (text) => {
    if (isNaN(text)){
      return;
    }
    this.setState(() => ({ text }));
    const { lhsPickerValue, rhsPickerValue } = this.state;
    this.convertRate(lhsPickerValue, rhsPickerValue, text);
  }

  LHSOnValueChange = (itemValue) => {
    if (itemValue === 'NGN') {
      this.setState({ rhsPickerValue: 'USD', lhsPickerValue: itemValue });
      return;
    }
    this.setState({ lhsPickerValue: itemValue });
  }

  RHSOnValueChange = (itemValue) => {
    this.setState({ rhsPickerValue: itemValue });
  }

  RHSPicker = () => {
    const { lhsPickerValue } = this.state;
    const values = ['YEN', 'NGN', 'GBP', 'USD', 'EUR'];

    if (lhsPickerValue === 'NGN') {
      return values.map((item, index) => <PickerItem key={index} label={item} value={item} />);
    }
    return (
      <PickerItem label="NGN" value="NGN" />
    );
  }

  LHSPicker = () => {
    const values = ['NGN', 'USD', 'GBP', 'YEN', 'EUR'];
    return values.map((item, index) => <PickerItem key={index} label={item} value={item} />);
  }

  render() {
    const {
      showModal,
      RHSOnValueChange,
      LHSOnValueChange,
      onChange,
      state: {
        modalVisible,
        lhsPickerValue,
        rhsPickerValue,
        text,
        conversionResult
      }
    } = this;

    return (
      <ImageBackground
        source={Images.background}
        style={styles.wrapperImage}
      >
        <View style={styles.outerPadding}>
          <View style={styles.outerView}>
            <TouchableHighlight onPress={showModal}>
              <View style={styles.calcView}>
                <Image
                  style={styles.calcImg}
                  source={Images.converter} />
              </View>
            </TouchableHighlight>
          </View>
          {this.props.children}
          <Modal
            isVisible={modalVisible}
            onBackdropPress={() => this.setState({ modalVisible: false })}
            backdropOpacity={0.6}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
          >
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Image
                  style={styles.calcImg}
                  source={Images.converterLight} />
                <Text style={styles.yellow}>Currency Converter:</Text>
              </View>
              <View style={styles.formStyle}>
                <Item style={styles.item}>
                  <Input
                    value={text}
                    onChangeText={onChange}
                    keyboardType = 'numeric'
                    placeholder='Enter amount'
                    placeholderTextColor="#c6c6c6" />
                </Item>
                <View style={{ width: '80%' }}>
                  <Text style={styles.select}>Select Currency: </Text>
                </View>
                <View style={styles.converterView}>
                  <Item style={styles.pickerWrapper}>
                    <Picker
                      selectedValue={lhsPickerValue}
                      style={{ height: 30, width: 130 }}
                      onValueChange={LHSOnValueChange}>
                      {this.LHSPicker()}
                    </Picker>
                  </Item>
                  <Image
                    style={styles.arrow}
                    source={Images.btn} />
                  <Item style={styles.pickerWrapper}>
                    <Picker
                      selectedValue={rhsPickerValue}
                      style={{ height: 40, width: 130 }}
                      onValueChange={RHSOnValueChange}>
                      {this.RHSPicker()}
                    </Picker>
                  </Item>
                </View>
                <View style={styles.resultView}>
                  <Text style={styles.resultText}>{!!conversionResult && conversionResult.toFixed(4)}</Text>
                </View>
                <TouchableHighlight
                  underlayColor="#19B01D"
                  style={styles.buttonBody}
                  onPress={() => this.convertRate(lhsPickerValue, rhsPickerValue, text)}
                >
                  <Text style={styles.buttonText}>Convert</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    );
  }
}

export default ContentWrapper;
