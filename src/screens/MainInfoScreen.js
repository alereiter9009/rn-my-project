import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, FlatList, Image } from 'react-native';


const MainInfoScreen = () => {

  /*React Hooks useState used for handling state on a functional component as opposed to traditional class state components
  Better organised, improving code readability
  */
  const [isLoading, setLoading] = useState(true); //array destructuring is used for starting the state, with the default value of true
  const [data, setData] = useState({}); // array destructuring is used for starting the state with a default value of an empty object
  // React Hooks useEffect used as best-practice to tell component to execute logic after rendering it
  useEffect(() => {
    //Fetch method used for fetching South Korea's data from an API
    fetch('https://restcountries.eu/rest/v2/callingcode/82')
      .then((response) => response.json())
      .then((json) => setData(json)) //using setter for storing the data of json, never the actual data variable
      .catch((error) => console.error(error)) //error handler
      .finally(() => setLoading(false));
  });

  return (
    <View style={{ flex: 1 }}>
{/*
Top Image Component bellow for Upmost Image laid on this screen
*/}
      <View style={{ flex: 0.55 }}>
        <Image
          style={styles.topImageStyle}
          source={require('../../assets/croppedseoulmain.jpg')}
        />
      </View>
      {/*
      Header View and Text Component for creating Country Information Header below
      */}
      <View style={{backgroundColor: '#ff8cb1'}}>
        <Text style={styles.headerText}>Country Information</Text></View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Image
            style={styles.koreaImageStyle}
            source={require('../../assets/transparentkorea.png')}
          />
        </View>
        {/*
        ActivityIndicator component used for displaying loading action for API's data
        */}
        <View style={{ flex: 1, flexDirection: 'column'}}>
          {isLoading ? <ActivityIndicator /> : (
            //FlatList Component used for displaying lists of items
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={{ marginTop: 30 }}>
                  {/* 
                  Workaround on FlatList with multiple Text components for displaying fetched data
                  Not optimal but does what is needed
                  Notice slice was used to get rid of quotes and unnecessary extra info from strings
                  */}
                  <Text key={JSON.stringify(item.capital)} style={styles.apiText}>Capital : {JSON.stringify(item.capital).slice(1, -1)}</Text>
                  <Text key={JSON.stringify(item.region)} style={styles.apiText}>Region : {JSON.stringify(item.region).slice(1, -1)}</Text>
                  <Text key={JSON.stringify(item.languages[0].name)} style={styles.apiText}>Language : {JSON.stringify(item.languages[0].name).slice(1, -1)}</Text>
                  <Text key={JSON.stringify(item.currencies[0].name)} style={styles.apiText}>Currency : {JSON.stringify(item.currencies[0].name).slice(1, -1)}</Text>
                  <Text key={JSON.stringify(item.area)}style={styles.apiText}>Area : {JSON.stringify(item.area)} Km2</Text>
                  <Text key={JSON.stringify(item.population)}style={styles.apiText}>Population : {JSON.stringify(item.population).slice(0, -6)} Mil</Text>
                  <Text key={JSON.stringify(item.latlng)}style={styles.apiText}>Latitude : {JSON.stringify(item.latlng).slice(1, -7)}</Text>
                  <Text key={JSON.stringify(item.latlng).slice(1,-1)}style={styles.apiText}>Longitude : {JSON.stringify(item.latlng).slice(4, -1)}</Text>
                  <Text key={JSON.stringify(item.timezones[0])}style={styles.apiText}>Timezone : {JSON.stringify(item.timezones[0]).slice(1, -1)}</Text>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  apiText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#67cdf5'
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff', 
    textAlign: 'center'
  },
  topImageStyle: {
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null,
  }, 
  koreaImageStyle: {
      flex: 1,
      height: null,
      resizeMode: 'contain',
      width: null,
  },
});

export default MainInfoScreen;