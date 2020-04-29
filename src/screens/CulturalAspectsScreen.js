import React, { useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import ImageHeaderComponent from '../components/ImageHeaderComponent';
import FactsComponent from '../components/FactsComponent';
import * as firebase from 'firebase';




const CulturalAspectsScreen = () => {
// Variables responsible for handling state of component
  const [cultOne, setcultOne] = useState('');
  const [cultTwo, setcultTwo] = useState('');
  const [cultThree, setcultThree] = useState('');
  const [cultFour, setcultFour] = useState('');
  const [cultFive, setcultFive] = useState('');
  const [cultSix, setcultSix] = useState('');
  const [cultSeven, setcultSeven] = useState('');
  const [cultEight, setcultEight] = useState('');
  const [cultNine, setcultNine] = useState('');
  const [cultTen, setcultTen] = useState('');
  const [cultEleven, setcultEleven] = useState('');
// Database references, snapshots of data, storing them on the SetterState variables
  const database = firebase.database();
  database.ref('cultureFacts/factone').once("value").then(function (snapshot) { setcultOne(snapshot.val()) });
  database.ref('cultureFacts/facttwo').once("value").then(function (snapshot) { setcultTwo(snapshot.val()) });
  database.ref('cultureFacts/factthree').once("value").then(function (snapshot) { setcultThree(snapshot.val()) });
  database.ref('cultureFacts/factfour').once("value").then(function (snapshot) { setcultFour(snapshot.val()) });
  database.ref('cultureFacts/factfive').once("value").then(function (snapshot) { setcultFive(snapshot.val()) });
  database.ref('cultureFacts/factsix').once("value").then(function (snapshot) { setcultSix(snapshot.val()) });
  database.ref('cultureFacts/factseven').once("value").then(function (snapshot) { setcultSeven(snapshot.val()) });
  database.ref('cultureFacts/facteight').once("value").then(function (snapshot) { setcultEight(snapshot.val()) });
  database.ref('cultureFacts/factnine').once("value").then(function (snapshot) { setcultNine(snapshot.val()) });
  database.ref('cultureFacts/factten').once("value").then(function (snapshot) { setcultTen(snapshot.val()) });
  database.ref('cultureFacts/facteleven').once("value").then(function (snapshot) { setcultEleven(snapshot.val()) });

  return (
    //Container
    <View style={{ flex: 1 }}>
      {/*Container of Image*/}
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          customStyle={{backgroundColor: 'black'}}
          imageSource={require('../../assets/culturehanbok.png')}
          header="Cultural Aspects" />
      </View>
      {/*Scrollable Container */}
      <ScrollView style={styles.scrollContainerStyle}>
        {/*Calling customised components for displaying Header title as well as CultureAspects Description with variables holding the state */}
        <FactsComponent header="Number#1" factDescription={cultOne}/>
        <FactsComponent header="Number#2" factDescription={cultTwo}/>
        <FactsComponent header="Number#3" factDescription={cultThree}/>
        <FactsComponent header="Number#4" factDescription={cultFour}/>
        <FactsComponent header="Number#5" factDescription={cultFive}/>
        <FactsComponent header="Number#6" factDescription={cultSix}/>
        <FactsComponent header="Number#7" factDescription={cultSeven}/>
        <FactsComponent header="Number#8" factDescription={cultEight}/>
        <FactsComponent header="Number#9" factDescription={cultNine}/>
        <FactsComponent header="Number#10" factDescription={cultTen}/>
        <FactsComponent header="Number#11" factDescription={cultEleven}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainerStyle: {
    flex:1, 
    backgroundColor: '#d6d6ff'
  },
  factsTextStyle: {
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    borderBottomWidth: 0.5, 
    borderTopWidth: 0.5,
    borderTopColor: 'white',
    borderBottomColor: 'white'
  },
});

export default CulturalAspectsScreen;
