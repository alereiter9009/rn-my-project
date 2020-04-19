import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Linking } from 'react-native';
import TopDishesComponent from '../components/TopDishesComponent';

const DishesScreen = () => {

  const kimchiLink = () => { Linking.openURL('https://www.google.com/search?q=Kimchi+Bokkeumbap');};
  const bulgogiLink = () => { Linking.openURL('https://www.google.com/search?q=Bulgogi');};
  const bibimbapLink = () => { Linking.openURL('https://www.google.com/search?q=Bibimbap');};
  const gimbapLink = () => { Linking.openURL('https://www.google.com/search?q=Gimbap');};
  const samgyeopsalLink = () => { Linking.openURL('https://www.google.com/search?q=Samgyeopsal');};
  const yangnyeomChickenLink = () => { Linking.openURL('https://www.google.com/search?q=Yangneyom+Chicken');};
  const tteokbokkiLink = () => { Linking.openURL('https://www.google.com/search?q=Tteokbokki');};
  const dakGalbiLink = () => { Linking.openURL('https://www.google.com/search?q=Dak+Galbi');};
  const dakbokkeumtangLink = () => { Linking.openURL('https://www.google.com/search?q=Dakbokkeumtang');};
  const haemulPajeonLink = () => { Linking.openURL('https://www.google.com/search?q=Haemul+Pajeon');};
  const japchaeLink = () => { Linking.openURL('https://www.google.com/search?q=Japchae');};

  return (
    <View style={{ flex: 1 }}>
      {/*
Top Image Component below for Upmost Image laid on this screen
*/}
      <View style={{ flex: 0.55 }}>
        <Image
          style={styles.topImageStyle}
          source={require('../../assets/kimchi1.jpg')}
        />
      </View>
      {/*
      Header View and Text Component for creating Country Information Header below
      */}
      <View style={{ backgroundColor: '#ff8cb1' }}>
        <Text style={styles.headerText}>Top Dishes</Text>
      </View>
      {/* CONTAINER*/}
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* SCROLL VIEW CONTAINER*/}
        <ScrollView style={{ flex: 1, flexDirection: 'column'}}>
          {/* 
          This is the reusable component I have created that combines View, Text and Image components 
          This component follows best-practice for reducing the amount of repeated code for displaying content*/}
          
          <TopDishesComponent
            imageSource={require('../../assets/bulgogi.jpg')}
            title="Bulgogi (Soy-marinated thinly-sliced Beef)"
            urlLink={bulgogiLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/bibimbap.jpg')}
            title="Bibimbap (Mixed rice with meat and vegetables“)"
            urlLink={bibimbapLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/gimbap.jpg')}
            title="Gimbap (Dried Seaweed Rice Rolls)"
            urlLink={gimbapLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/samgyeopsal.jpg')}
            title="Samgyeopsal (Three-layer meat / Pork Belly BBQ)"
            urlLink={samgyeopsalLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/yangnyeomchicken.jpg')}
            title="Yangnyeom Chicken (Spicy Sauce Fried Chicken)"
            urlLink={yangnyeomChickenLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/tteokkbokki.jpg')}
            title="Tteokk-bokki (Spicy Stir-fried Rice Cakes)"
            urlLink={tteokbokkiLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/dakgalbi.jpg')}
            title="Dak-Galbi            (Spicy Stir-fried Chicken)"
            urlLink={dakGalbiLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/dakbokkeumtang.jpg')}
            title="Dakbokkeumtang (Spicy Braised Chicken)"
            urlLink={dakbokkeumtangLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/haemulpajeon.jpg')}
            title="Haemul Pajeon (Seafood Scallion Pancake)"
            urlLink={haemulPajeonLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/japchae.jpg')}
            title="Japchae (Stir-fried Glass Noodles with Vegetables)"
            urlLink={japchaeLink}
          />
          <TopDishesComponent
            imageSource={require('../../assets/kimchifriedrice.jpg')}
            title="Kimchi Bokkeumbap (Kimchi Fried Rice)"
            urlLink={kimchiLink}
          />
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
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
  dishesImagesStyle: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null,
  },
  dishesTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#67cdf5',
    textAlign: 'center'
  }
});

export default DishesScreen;