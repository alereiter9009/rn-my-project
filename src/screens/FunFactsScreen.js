import React, { useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import ImageHeaderComponent from '../components/ImageHeaderComponent';
import FactsComponent from '../components/FactsComponent';
import * as firebase from 'firebase';




const FunFactsScreen = () => {
// Variables responsible for handling state of component
  const [funOneFact, setFunOneFact] = useState('');
  const [funTwoFact, setFunTwoFact] = useState('');
  const [funThreeFact, setFunThreeFact] = useState('');
  const [funFourFact, setFunFourFact] = useState('');
  const [funFiveFact, setFunFiveFact] = useState('');
  const [funSixFact, setFunSixFact] = useState('');
  const [funSevenFact, setFunSevenFact] = useState('');
  const [funEightFact, setFunEightFact] = useState('');
  const [funNineFact, setFunNineFact] = useState('');
  const [funTenFact, setFunTenFact] = useState('');
  const [funElevenFact, setFunElevenFact] = useState('');
// Database references, snapshots of data, storing them on the SetterState variables
  const database = firebase.database();
  database.ref('funFacts/funone').once("value").then(function (snapshot) { setFunOneFact(snapshot.val()) });
  database.ref('funFacts/funtwo').once("value").then(function (snapshot) { setFunTwoFact(snapshot.val()) });
  database.ref('funFacts/funthree').once("value").then(function (snapshot) { setFunThreeFact(snapshot.val()) });
  database.ref('funFacts/funfour').once("value").then(function (snapshot) { setFunFourFact(snapshot.val()) });
  database.ref('funFacts/funfive').once("value").then(function (snapshot) { setFunFiveFact(snapshot.val()) });
  database.ref('funFacts/funsix').once("value").then(function (snapshot) { setFunSixFact(snapshot.val()) });
  database.ref('funFacts/funseven').once("value").then(function (snapshot) { setFunSevenFact(snapshot.val()) });
  database.ref('funFacts/funeight').once("value").then(function (snapshot) { setFunEightFact(snapshot.val()) });
  database.ref('funFacts/funnine').once("value").then(function (snapshot) { setFunNineFact(snapshot.val()) });
  database.ref('funFacts/funten').once("value").then(function (snapshot) { setFunTenFact(snapshot.val()) });
  database.ref('funFacts/funeleven').once("value").then(function (snapshot) { setFunElevenFact(snapshot.val()) });

  return (
    //Container
    <View style={{ flex: 1 }}>
      {/*Container of Image*/}
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          imageSource={require('../../assets/didyouknow.jpg')}
          header="Fun Facts" />
      </View>
      {/*Scrollable Container */}
      <ScrollView style={styles.scrollContainerStyle}>
        {/*Calling customised components for displaying Header title as well as Facts Description with variables holding the state */}
        <FactsComponent header="Fact#1" factDescription={funOneFact}/>
        <FactsComponent header="Fact#2" factDescription={funTwoFact}/>
        <FactsComponent header="Fact#3" factDescription={funThreeFact}/>
        <FactsComponent header="Fact#4" factDescription={funFourFact}/>
        <FactsComponent header="Fact#5" factDescription={funFiveFact}/>
        <FactsComponent header="Fact#6" factDescription={funSixFact}/>
        <FactsComponent header="Fact#7" factDescription={funSevenFact}/>
        <FactsComponent header="Fact#8" factDescription={funEightFact}/>
        <FactsComponent header="Fact#9" factDescription={funNineFact}/>
        <FactsComponent header="Fact#10" factDescription={funTenFact}/>
        <FactsComponent header="Fact#11" factDescription={funElevenFact}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainerStyle: {
    flex:1, 
    backgroundColor: '#ffc9db'
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

export default FunFactsScreen;
