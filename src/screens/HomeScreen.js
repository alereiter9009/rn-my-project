import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, } from 'react-native';
//This is the Main Screen

//Notice navigation is received as a prop so you may use its method to point to buttons to navigate for other screens
const HomeScreen = ({ navigation }) => {

  /*
  View component is equivalent to a div tag, used below for creating the container for components
  Style may be configured in each component by the use of the component StyleSheet where you create style objects
  */
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2.2 }}>
        <Image
          style={styles.topImageStyle}
          source={require('../../assets/seoul.jpg')}
        />
        <View style={styles.imageTextContainer}>
          <Text style={styles.imageText}>South Korea</Text>
        </View>
      </View>
      {/*First Row Container for Touchable Buttons*/}
      <View style={[styles.firstRowButtonContainer ,styles.buttonRowsStyle]}>
        <View style={styles.infoStyle}>
        <TouchableOpacity style={styles.selfAligner} onPress={() => navigation.navigate('MainInfo')}>
          <Image source={require('../../assets/globe.jpg')} />
          <Text style={[styles.infoTextStyle, styles.buttonsText]}>Info</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.funFactsStyle}>
        <TouchableOpacity style={Object.assign({paddingLeft: 25}, styles.selfAligner)} onPress={() => navigation.navigate('FunFacts')}>
          <Image source={require('../../assets/croppedsmiley.png')} />
          <Text style={[styles.funFactsTextStyle, styles.buttonsText]}>Fun Facts</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.mustVisitStyle}>
        <TouchableOpacity style={{paddingLeft: 28}}onPress={() => navigation.navigate('Establishments')}>
          <Image source={require('../../assets/croppedmuseum.png')} />
          <Text style={[styles.mustVisitTextStyle, styles.buttonsText]}>Must Visit</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Second Row Container for Touchable Buttons*/}
      <View style={styles.secondRowButtonContainer}>
        <View style={styles.culturalAspectStyle}>
        <TouchableOpacity style={Object.assign({paddingLeft: 25}, styles.selfAligner)} onPress={() => navigation.navigate('CulturalAspects')}>
          <Image source={require('../../assets/croppedexclamation.png')} />
          <Text style={[styles.culturalAspectTextStyle, styles.buttonsText]}>Cultural Aspect</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.topDishesStyle}>
        <TouchableOpacity style={[styles.selfAligner, styles.topDishesButtonStyle]}onPress={() => navigation.navigate('Dishes')}>
          <Image source={require('../../assets/croppednoodle.png')} />
          <Text style={[styles.topDishesTextStyle, styles.buttonsText]}>Top Dishes</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.aboutStyle} >
        <TouchableOpacity style={styles.selfAligner}onPress={() => navigation.navigate('About')}>
          <Image source={require('../../assets/croppedabout.png')} />
          <Text style={[styles.aboutTextStyle, styles.buttonsText]}>About</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Text style={styles.googleMapButtonStyle}>Show on Map</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

// This is the StyleSheet component, used for creating style objects, best-practice as it supports some optimisation
const styles = StyleSheet.create({
  topImageStyle: {
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null,
  },
  buttonsText: {
    color: '#67cdf5',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  imageTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: '#ffff',
    fontSize: 33,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  buttonRowsStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly', 
    borderBottomWidth: 5, 
    borderBottomColor: '#ffffff', 
    marginBottom: 40 
  },
  firstRowButtonContainer: {
    flex: 1, 
    paddingTop: 40, 
    paddingBottom: 50
  },
  secondRowButtonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  selfAligner:{
    alignSelf: 'center'
  },
  infoStyle: {
    flex: 1,
    borderEndWidth: 5,
    borderEndColor: '#ffffff'
  },
  infoTextStyle: {
    paddingTop: 10, 
    paddingLeft: 3
  },
  funFactsStyle: {
    flex: 1,
  },
  funFactsTextStyle: {
    marginRight: 10, 
    paddingRight: 12
  },
  mustVisitStyle: {
    flex: 1,
    borderLeftWidth: 5,
    borderLeftColor: '#ffffff'
  },
  mustVisitTextStyle: {
    marginLeft: 6, 
    paddingRight: 25
  },
  culturalAspectStyle: {
    flex: 1,
    borderEndWidth: 5,
    borderRightColor: '#ffffff',
  },
  culturalAspectTextStyle: {
    paddingRight: 21
  },
  topDishesStyle: {
    flex: 1,
  },
  topDishesButtonStyle: {
    paddingLeft: 25
  },
  topDishesTextStyle: {
    marginRight: 27
  }, 
  aboutStyle: {
    flex: 1,
    borderLeftWidth: 5,
    borderLeftColor: '#ffffff'
  },
  aboutTextStyle: {
    paddingTop: 10
  },
  mapContainer: {
    backgroundColor: '#47a6ff', 
    flexDirection: 'column', 
    justifyContent: 'flex-end', 
    flex: 0.35, 
    marginTop: 40
  },
  googleMapButtonStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center', 
    
  },
});
console.disableYellowBox = true;

export default HomeScreen;
