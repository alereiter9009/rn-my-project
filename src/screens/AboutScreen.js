import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native';

const AboutScreen = () => {

  const contactLink = () => { Linking.openURL('https://www.linkedin.com/in/alexander-reiter');};
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: '#67cdf5', height: 115 }}>
      </View>
      <View
        style={{ position: 'absolute', top: 35, left: 100, right: 0, bottom: 0 }}>
        <Image
          style={{ height: 150, width: 150, }}
          source={require('../../assets/alexander.png')}
        />
      </View>
      <View>
      <TouchableOpacity>
        <View style={styles.contactButtonContainer}>
          <Text style ={styles.contactTextStyle}onPress={contactLink}>CONTACT</Text>
        </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  contactButtonContainer: {
    backgroundColor: '#67cdf5',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 120,
    marginLeft: 120,
    borderColor: '#67cdf5',
    marginTop: 90,
  },
  contactTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

});

export default AboutScreen;
