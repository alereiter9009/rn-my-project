import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import ImageHeaderComponent from '../components/ImageHeaderComponent';

const FunFactsScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          imageSource={require('../../assets/didyouknow.jpg')}
          header="About" />
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default FunFactsScreen;
