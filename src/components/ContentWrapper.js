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


const PickerItem = Picker.Item;
class ContentWrapper extends Component {

  state = {
    modalVisible: false,
    lhsPickerValue: 'NGN',
    rhsPickerValue: 'USD',
    text: '',
    conversionRate: '',
    conversionResult: '',
  }

  showModal = async () => {
    this.setState(() => ({
      text: '',
      conversionRate: '',
      modalVisible: true,
      conversionResult: ''
    }));
  }

  convertRateOnTextChange() {
    const { conversionRate, text, lhsPickerValue } = this.state;
    if(conversionRate && text) {
      const conversionResult = lhsPickerValue === 'NGN' ? (text / conversionRate).toFixed(2) : (text * conversionRate).toFixed(2);
      this.setState(() => ({ conversionResult }));
    }
  }

  convertRate = () => {
    this.convertRateOnTextChange();
  }

  handleTextChange = (text) => {
    if (isNaN(text)){
      return;
    }
    this.setState(() => ({ text }), () => this.convertRateOnTextChange());
  }

  handleRateChange = (rate) => {
    if (isNaN(rate)){
      return;
    }
    this.setState(() => ({ conversionRate: rate }), () => this.convertRateOnTextChange());
  }

  LHSOnValueChange = (itemValue) => {
    if (itemValue === 'NGN') {
      this.setState(() => ({ rhsPickerValue: 'USD', lhsPickerValue: itemValue }), () => this.convertRateOnTextChange());
      return;
    }
    this.setState(() => ({ lhsPickerValue: itemValue }), () => this.convertRateOnTextChange());
  }

  RHSOnValueChange = (itemValue) => {
    this.setState(() => ({ rhsPickerValue: itemValue }), () => this.convertRateOnTextChange());
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
      convertRate,
      showModal,
      RHSOnValueChange,
      LHSOnValueChange,
      handleRateChange,
      handleTextChange,
      state: {
        modalVisible,
        lhsPickerValue,
        rhsPickerValue,
        text,
        conversionRate,
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
                    onChangeText={handleTextChange}
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
                <Item style={styles.item}>
                  <Input
                    value={conversionRate}
                    onChangeText={handleRateChange}
                    keyboardType = 'numeric'
                    placeholder='Enter rate'
                    placeholderTextColor="#c6c6c6" />
                </Item>
                <View style={styles.resultView}>
                  <Text style={styles.resultText}>{conversionResult}</Text>
                </View>
                <TouchableHighlight
                  underlayColor="#19B01D"
                  style={styles.buttonBody}
                  onPress={convertRate}
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
