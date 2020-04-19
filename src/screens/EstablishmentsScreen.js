import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ImageHeaderComponent from '../components/ImageHeaderComponent';

const EstablishmentsScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          imageSource={require('../../assets/nationalfolkmuseum.jpg')}
          header="Must Visit" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({});

export default EstablishmentsScreen;
