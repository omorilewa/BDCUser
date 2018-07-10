import React, { PureComponent } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';
import { ContentWrapper } from '.';
import { AboutStyles as styles } from '../styles';

const aboutText = `
The acronym ABCON depicts Association of\n Bureaux De Change Operators of Nigeria.\n The historical background of ABCON dates back\n to 4th of February, 1997 when its registration\n was approved by the Corporate Affairs\n Commission (C.A.C).\n\n It came into being from a vision of some\n bureaux de change operators numbering more\n than 50(fifty) in an attempt to create an\n environment of sanctity in the business of\n foreign exchange.\n\n Hither-to, the country-Nigeria was experiencing\n an economic recession which emanated from\n the restrictions placed on foreign exchange by a\n government policy named "Structural\n Adjustment Program" (SAP) prevalent in the '80s.
`;
class About extends PureComponent {
  render() {
    return (
      <ContentWrapper>
        <View style={styles.container}>
          <TouchableHighlight style={styles.aboutContent}>
            <Text style={styles.aboutText}>{aboutText}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Linking.openURL('http://abcon.org.ng/AboutUs.aspx')}
            underlayColor="#19B01D"
            style={styles.readMoreButton}>
            <Text style={styles.cta}>Read more</Text>
          </TouchableHighlight>
        </View>
      </ContentWrapper>
    );
  }
}

export default About;
