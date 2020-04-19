import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';

const TopDishesComponent = ({ imageSource, title, urlLink }) => {


  return (
    <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 2, }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Image
          style={{
            flex: 1,
            height: null,
            resizeMode: 'stretch',
            width: null,
          }}
          source={imageSource}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'column', borderLeftWidth: 1, borderLeftColor: '#ff8cb1' }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#67cdf5',
          textAlign: 'center',
        }}>{title}</Text>
        <View style={{backgroundColor: '#ffc382', marginRight: 30, marginLeft: 30, marginTop: 10, marginBottom: 5}}>
          <Text style ={{textAlign: 'center', fontWeight: 'bold'}}onPress={urlLink}>Open on Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TopDishesComponent;
