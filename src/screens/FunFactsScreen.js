import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ImageHeaderComponent from '../components/ImageHeaderComponent';

const FunFactsScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          imageSource={require('../../assets/didyouknow.jpg')}
          header="About" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({});

export default FunFactsScreen;
