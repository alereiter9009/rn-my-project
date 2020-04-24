import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Linking, } from 'react-native';

const AboutScreen = () => {

  const contactLink = () => { Linking.openURL('https://www.linkedin.com/in/alexander-reiter'); };
  const emailLink = () => { Linking.openURL('mailto:alereiter9009@gmail.com?subject=Korify'); };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.backgroundHeaderContainer}>
      </View>
      <View
        style={styles.headerImagePosition}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/alexander.png')}
        />
      </View>
      <View style={styles.buttonsViewMainContainer}>
        <TouchableOpacity style={styles.buttonsLayoutAdjust}>
          <View style={styles.contactButtonContainer}>
            <Text style={styles.contactTextStyle} onPress={contactLink}>CONTACT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsLayoutAdjust}>
          <View style={styles.contactButtonContainer}>
            <Text style={styles.contactTextStyle} onPress={emailLink}>E-MAIL</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.fullNameTextContainer}>
        <Text style={styles.fullNameTextStyle}>Alexander Reiter, 26</Text>
        <Text style={styles.cityTextStyle}>Sao Paulo, Brazil</Text>
      </View>
      <View style={styles.appDescriptionContainer}>
        <Text style={styles.appDescriptionTextStyle}>This Application has been developed by a student for academic purposes on College of Computing and Technology</Text>
      </View>
      <View style={styles.cctImgContainer}>
        <Image
          style={styles.cctImgStyle}
          source={require('../../assets/transparentcct.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#67cdf5',
    height: 115
  },
  headerImagePosition: {
    position: 'absolute',
    top: 35,
    left: 100,
    right: 0,
    bottom: 0,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  buttonsViewMainContainer: {
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd', 
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  buttonsLayoutAdjust: {
    marginTop: 80, 
    paddingBottom: 20 
  },
  contactButtonContainer: {
    backgroundColor: '#1a1ae8',
    borderColor: '#1a1ae8',
    borderWidth: 2,
    borderRadius: 5,
    width: 100,
    margin: 5,
  },
  contactTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffff',
    padding: 2,
  },
  fullNameTextContainer: {
    flexDirection: 'row', 
    height: 100, 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd', 
    paddingTop: 15,
  }, 
  fullNameTextStyle: {
    fontSize: 30, 
    alignSelf: 'center', 
  },
  cityTextStyle: {
    alignSelf: 'center',
  }, 
  appDescriptionContainer: {
    flexWrap: 'wrap', 
    alignItems: 'center', 
    paddingTop: 25,
  }, 
  appDescriptionTextStyle: {
    fontSize: 15, 
    color: '#aaaaaa', 
    margin: 20, 
    textAlign: 'center' 
  }, 
  cctImgContainer: {
    flexWrap: 'wrap', 
    flex: 1, 
    alignContent: 'center', 
    justifyContent: 'center',
  }, 
  cctImgStyle: {
    height: 150, 
    width: 350, 
    resizeMode: 'contain', 
  }




});

export default AboutScreen;
