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
      modalVisible: true,
      conversionResult: ''
    }));
  }

  convertRate = () => {
    const { conversionRate, text } = this.state;
    if(conversionRate && text ) {
      const conversionResult = (text / conversionRate).toFixed(2);
      this.setState(() => ({ conversionResult }));
    }
  }

  onChange = (text) => {
    if (isNaN(text)){
      return;
    }
    this.setState(() => ({ text }));
  }

  onChangeRate = (rate) => {
    if (isNaN(rate)){
      return;
    }
    this.setState(() => ({ conversionRate: rate  }));
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
      onChangeRate,
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
                <Item style={styles.item}>
                  <Input
                    value={conversionRate}
                    onChangeText={onChangeRate}
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
                  onPress={this.convertRate}
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
