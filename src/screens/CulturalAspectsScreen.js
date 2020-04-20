import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import ImageHeaderComponent from '../components/ImageHeaderComponent';

const CulturalAspectsScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          imageSource={require('../../assets/culturehanbok.png')}
          header="Culture Aspects" />
      </View>
      <ScrollView style={{flex: 1, flexDirection: 'column'}}> 

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CulturalAspectsScreen;
