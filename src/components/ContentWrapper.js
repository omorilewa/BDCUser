import React, { Component } from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { GeneralStyles as styles } from '../styles';
import Images from '@assets/images';

class ContentWrapper extends Component {
  render() {
    return (
      <ImageBackground
        source={Images.background}
        style={styles.wrapperImage}
      >
        <View style={styles.outerPadding}>
          <View style={styles.outerView}>
            <View style={styles.calcView}>
              <Image
                style={styles.calcImg}
                source={Images.converter}/>
            </View>
          </View>
          {this.props.children}
        </View>
      </ImageBackground>
    );
  }
}

export default ContentWrapper;
