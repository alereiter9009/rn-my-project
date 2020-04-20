import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageHeaderComponent = ({ imageSource, header }) => {

  return (
    <View style={{flex: 1}}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.topImageStyle}
          source={imageSource}
        />
      </View>
      <View style={styles.headerColor}>
        <Text style={styles.headerText}>{header}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  topImageStyle: {
    flex: 1,
    height: null,
    resizeMode: 'stretch',
    width: null,
  },
  headerColor: {
    backgroundColor: '#ff8cb1',
  },
});

export default ImageHeaderComponent;

/*
      <View style={{ flex: 0.55 }}>
        <Image
          style={styles.topImageStyle}
          source={imageSource}
        />
      </View>
      <View style={styles.headerColor}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      */