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
        <View>
          <Button
            title="Open on Google"
            onPress={urlLink}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TopDishesComponent;

/*
  return (
    <View style={styles.container}>
      <Button
        title="Open on Google"
        onPress={kimchiLinking}
      />
    </View>
  );
}

const kimchiLinking = () => {
  Linking.openURL('https://www.google.com/search?q=Kimchi+Bokkeumbap');
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
*/