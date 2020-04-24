import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';

const ImagesLayoutComponent = ({ imageSource, title, urlLink }) => {


  return (
    <View style={styles.container}>
      <View style={styles.imageDishesContainer}>
        <Image
          style={styles.imageDishesStyles}
          source={imageSource}
        />
      </View>
      <View style={styles.imageDescriptionContainer}>
        <Text style={styles.imageDescriptionText}>{title}</Text>
        <TouchableOpacity>
        <View style={styles.googleButtonContainer}>
          <Text style ={styles.googleTextStyle}onPress={urlLink}>Open on Google</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    borderBottomWidth: 2,
    borderBottomColor: '#ff8cb1',
  },
  imageDishesContainer: {
    flex: 1, 
    flexDirection: 'column' 
  },
  imageDishesStyles: {
    flex: 1,
    height: null,
    resizeMode: 'stretch',
    width: null,
  },
  imageDescriptionContainer: {
    flex: 1, 
    flexDirection: 'column',
    borderLeftWidth: 1, 
    borderLeftColor: '#ff8cb1',
  },
  imageDescriptionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ADADAD',
    textAlign: 'center',
    marginTop: 6
  }, 
  googleButtonContainer: {
    backgroundColor: '#ffc382', 
    marginRight: 30, 
    marginLeft: 30, 
    marginTop: 6, 
    marginBottom: 8, 
    borderWidth: 2, 
    borderRadius: 20, 
    borderColor: '#ffc382', 
  }, 
  googleTextStyle: {
    textAlign: 'center', 
    fontWeight: 'bold', 
  }, 
});

export default ImagesLayoutComponent;
