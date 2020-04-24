import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const FactsComponent = ({ header, factDescription }) => {

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerColor}>
        <Text style={styles.headerText}>{header}</Text>
      </View>
      <Text style={styles.factsTextStyle}>{factDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerColor: {
    backgroundColor: 'white',
    marginHorizontal: 125,
    borderRadius: 20, 
    marginVertical: 10
  },
  factsTextStyle: {
    fontSize: 16, 
    color: '#595959',
    fontWeight: 'bold', 
    textAlign: 'center', 
    borderBottomWidth: 0.5, 
    borderTopWidth: 0.5,
    borderTopColor: 'white',
    borderBottomColor: 'white', 
    paddingVertical: 6, 
    paddingHorizontal: 8
  },
});

export default FactsComponent;
