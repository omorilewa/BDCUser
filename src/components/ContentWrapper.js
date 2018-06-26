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
    rhsPickerValue: 'USD'
  }

  showModal = () => {
    this.setState(() => ({
      modalVisible: true
    }));
  }

  LHSOnValueChange = (itemValue) => {
    if (itemValue === 'NGN') {
      this.setState({ rhsPickerValue: 'USD', lhsPickerValue: itemValue });
      return;
    }
    this.setState({ lhsPickerValue: itemValue });
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
      state: { modalVisible }
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
                  <Input placeholder='Enter amount' placeholderTextColor="#c6c6c6" />
                </Item>
                <View style={{ width: '80%' }}>
                  <Text style={styles.select}>Select Currency: </Text>
                </View>
                <View style={styles.converterView}>
                  <Item style={styles.pickerWrapper}>
                    <Picker
                      selectedValue={this.state.lhsPickerValue}
                      style={{ height: 30, width: 130 }}
                      onValueChange={this.LHSOnValueChange}>
                      {this.LHSPicker()}
                    </Picker>
                  </Item>
                  <Image
                    style={styles.arrow}
                    source={Images.btn} />
                  <Item style={styles.pickerWrapper}>
                    <Picker
                      selectedValue={this.state.rhsPickerValue}
                      style={{ height: 40, width: 130 }}
                      onValueChange={(itemValue) => this.setState({ rhsPickerValue: itemValue })}>
                      {this.RHSPicker()}
                    </Picker>
                  </Item>
                </View>
                <Item style={styles.item}>
                  <Input placeholder='Latest buy rate' placeholderTextColor="#c6c6c6" />
                </Item>
                <TouchableHighlight
                  underlayColor="#19B01D"
                  style={styles.buttonBody}
                  onPress={showModal}
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
