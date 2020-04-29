import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Linking, } from 'react-native';

const AboutScreen = () => {
  //Links being assigned to functions for later calling inside components
  const contactLink = () => { Linking.openURL('https://www.linkedin.com/in/alexander-reiter'); };
  const emailLink = () => { Linking.openURL('mailto:alereiter9009@gmail.com?subject=Korify'); };
  return (
    //Screen Container
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={styles.backgroundHeaderContainer}>
      </View>
      {/*Image container with profile image component inside */}
      <View
        style={styles.headerImagePosition}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/alexander.png')}
        />
      </View>
      {/* Buttons Container */}
      <View style={styles.buttonsViewMainContainer}>
        {/* Touchable Component to add user feedback when component is clicked */}
        <TouchableOpacity style={styles.buttonsLayoutAdjust}>
          <View style={styles.contactButtonContainer}>
            {/* Contact text component that calls contactLink function to redirect app user to my linkedin profile */}
            <Text style={styles.contactTextStyle} onPress={contactLink}>CONTACT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsLayoutAdjust}>
          <View style={styles.contactButtonContainer}>
            {/* Email text component that calls emaillink function to redirect app user to their e-mail application with my e-mail as the recipient */}
            <Text style={styles.contactTextStyle} onPress={emailLink}>E-MAIL</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.fullNameTextContainer}>
        <View style={{alignSelf: 'center'}}>
        {/* Centered text component with my full name and Place of Birth */}
        <Text style={styles.fullNameTextStyle}>Alexander Reiter, 26{"\n"}
        <Text style={styles.cityTextStyle}>São Paulo, Brazil</Text></Text>
        
        </View>
      </View>
      {/* View component with a text component containing a brief paragraph */}
      <View style={styles.appDescriptionContainer}>
        <Text style={styles.appDescriptionTextStyle}>This Application has been developed by a student for academic purposes on College of Computing and Technology</Text>
      </View>
      {/* CCTImage View component with the attached image to it.  */}
      <View style={styles.cctImgContainer}>
        <Image
          style={styles.cctImgStyle}
          source={require('../../assets/transparentcct.png')}
        />
      </View>
    </View>
  );
}
//Styles object with all styles being declared. Previously were assigned to their respective components
const styles = StyleSheet.create({
  backgroundHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#67cdf5',
    height: 115
  },
  headerImagePosition: {
    flex: 1,
    position: 'absolute',
    top: '+3%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageStyle: {
    height: '26.8%',
    width: '43.2%',
    alignSelf: 'center', 
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
    flexDirection: 'column', 
    height: '17%',  
    justifyContent: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd', 
  }, 
  fullNameTextStyle: {
    fontSize: 30, 
    alignSelf: 'center', 
    textAlign: 'center'
  },
  cityTextStyle: {
    alignSelf: 'center',
    fontSize: 16, 
    textAlign: 'center'
  }, 
  appDescriptionContainer: {
    flexWrap: 'wrap', 
    alignItems: 'center', 
    paddingTop: '9%',
    justifyContent: 'center'
  }, 
  appDescriptionTextStyle: {
    fontSize: 15, 
    color: '#aaaaaa', 
    margin: '7%', 
    textAlign: 'center' , 
    alignSelf: 'center'
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
