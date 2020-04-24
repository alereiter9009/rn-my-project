import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions} from 'react-native';

const MapScreen = () => {

  return (
    //Main Screen Container with a MapView component responsible for displaying the location of South Korea on the map
    <View style={styles.container}>
      <MapView style={styles.mapStyle} 
          initialRegion={{
          latitude: 36.586880,
          longitude: 127.927379,
          latitudeDelta: 1,
          longitudeDelta: 5.5}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;