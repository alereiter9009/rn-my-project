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
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.seoulImage}
          source={require('../../assets/seoultest.jpg')}
        />
        <View style={styles.imageTextContainer}>
          <Text style={styles.imageText}>South Korea</Text>
        </View>
      </View>
      {/*
      Container for the first row of buttons 
      TouchableOpacity component used as opposed to Button in order to give user feedback when clicked
      Navigation method is used to navigate to selected screen
      */}
      <View style={Object.assign({ flex: 0.5 }, styles.buttonsContainer)}>
        <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('MainInfo')}>
          <Image source={require('../../assets/croppedglobe.png')} />
          <Text style={styles.buttonsText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.funFactsStyle} onPress={() => navigation.navigate('FunFacts')}>
          <Image source={require('../../assets/croppedsmiley.png')} />
          <Text style={styles.buttonsText}>Fun Facts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mustVisitStyle} onPress={() => navigation.navigate('Establishments')}>
          <Image source={require('../../assets/croppedmuseum.png')} />
          <Text style={styles.buttonsText}>Must Visit</Text>
        </TouchableOpacity>
      </View>
      {/*
      Container for the second row of buttons 
      TouchableOpacity component used as opposed to Button in order to give user feedback when clicked
      Navigation method is used to navigate to selected screen
      */}
      <View style={[styles.secondRowButtonContainer, styles.buttonsContainer]}>
        <TouchableOpacity style={styles.culturalAspectStyle} onPress={() => navigation.navigate('CulturalAspects')}>
          <Image source={require('../../assets/croppedexclamation.png')} />
          <Text style={styles.buttonsText}>Culture Aspect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topDishesStyle} onPress={() => navigation.navigate('Dishes')}>
          <Image source={require('../../assets/croppednoodle.png')} />
          <Text style={styles.buttonsText}>Top Dishes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutStyle} onPress={() => navigation.navigate('About')}>
          <Image source={require('../../assets/croppedabout.png')} />
          <Text style={styles.buttonsText}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#ff8cb1' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Text style={styles.googleMapButtonStyle}>Show on Map</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
//style={Object.assign({ marginRight: "1.5em" }, style)}

// This is the StyleSheet component, used for creating style objects, best-practice as it supports some optimisation
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  seoulImage: {
    resizeMode: "contain",
    alignContent: 'stretch'
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
  buttonsText: {
    color: '#67cdf5',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 25,
  },
  imageText: {
    color: '#ffff',
    fontSize: 33,
    fontWeight: "bold"
  },
  culturalAspectStyle: {
    flex: 1,
    paddingLeft: 25,
    borderEndWidth: 5,
    borderRightColor: '#ffffff'
  },
  topDishesStyle: {
    flex: 1,
    paddingLeft: 30
  },
  aboutStyle: {
    flex: 1,
    borderLeftWidth: 5,
    paddingLeft: 20,
    borderLeftColor: '#ffffff'
  },
  secondRowButtonContainer: {
    flex: 0.55,
    borderTopWidth: 5,
    paddingTop: 30,
    borderTopColor: '#ffffff'
  },
  infoStyle: {
    flex: 1,
    paddingLeft: 25,
    borderEndWidth: 5,
    borderEndColor: '#ffffff'
  },
  funFactsStyle: {
    flex: 1,
    paddingLeft: 30
  },
  mustVisitStyle: {
    flex: 1,
    borderLeftWidth: 5,
    paddingLeft: 20,
    borderLeftColor: '#ffffff'
  },
  googleMapButtonStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  }
});

export default HomeScreen;
