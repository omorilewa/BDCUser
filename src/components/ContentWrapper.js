import React, { Component } from 'react';
import { ImageBackground, View, Image, TouchableHighlight, Text, Picker } from 'react-native';
import { Input, Item } from 'native-base';
import { GeneralStyles as styles } from '../styles';
import Images from '@assets/images';
import Modal from 'react-native-modal';

class ContentWrapper extends Component {

  state = {
    modalVisible: null,
  }

  showModal = () => {
    this.setState(() => ({
      modalVisible: true
    }));
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
                      selectedValue={this.state.language}
                      style={{ height: 30, width: 130 }}
                      onValueChange={(itemValue) => this.setState({ language: itemValue })}>
                      <Picker.Item label="NGN" value="NGN" />
                      <Picker.Item label="USD" value="USD" />
                      <Picker.Item label="GBP" value="GBP" />
                      <Picker.Item label="EUR" value="EUR" />
                      <Picker.Item label="YEN" value="YEN" />
                    </Picker>
                  </Item>
                  <Image
                    style={styles.arrow}
                    source={Images.btn} />
                  <Item style={styles.pickerWrapper}>
                    <Picker
                      selectedValue={this.state.language}
                      style={{ height: 40, width: 130 }}
                      onValueChange={(itemValue) => this.setState({ language: itemValue })}>
                      <Picker.Item label="USD" value="USD" />
                      <Picker.Item label="NGN" value="NGN" />
                      <Picker.Item label="GBP" value="GBP" />
                      <Picker.Item label="EUR" value="EUR" />
                      <Picker.Item label="YEN" value="YEN" />
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
