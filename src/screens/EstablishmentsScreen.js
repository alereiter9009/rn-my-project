import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Linking } from 'react-native';
import ImagesLayoutComponent from '../components/ImagesLayoutComponent';
import ImageHeaderComponent from '../components/ImageHeaderComponent';

const EstablishmentsScreen = () => {
// All Linking methods assigned to functions to be later called inside components onPress
  const hwaseongLink = () => { Linking.openURL('https://www.google.com/search?q=Hwaseong+Fortress'); };
  const changdeokgungLink = () => { Linking.openURL('https://www.google.com/search?q=Changdeokgung+Palace'); };
  const bulguksaLink = () => { Linking.openURL('https://www.google.com/search?q=Bulguksa'); };
  const gyeongjusilLink = () => { Linking.openURL('https://www.google.com/search?q=Gyeongju+Historic+Areas'); };
  const jongmyoshrineLink = () => { Linking.openURL('https://www.google.com/search?q=Jongmyo+Shrine'); };
  const seokguramLink = () => { Linking.openURL('https://www.google.com/search?q=Seokguram'); };
  const royaltombsLink = () => { Linking.openURL('https://www.google.com/search?q=Royal+Tombs+of+the+Joseon+Dynasty'); };
  const gochangLink = () => { Linking.openURL('https://www.google.com/search?q=Gochang,+Hwasun+and+Ganghwa+Dolmen+Sites'); };
  const haeinsaLink = () => { Linking.openURL('https://www.google.com/search?q=Haeinsa+Temple'); };
  const baekjeLink = () => { Linking.openURL('https://www.google.com/search?q=Baekje+Historic+Areas'); };
  const tripitakaLink = () => { Linking.openURL('https://www.google.com/search?q=Tripitaka+Koreana'); };
  const jejuLink = () => { Linking.openURL('https://www.google.com/search?q=Jeju+Volcanic+Island+and+Lava+Tubes'); };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.65 }}>
        <ImageHeaderComponent
          imageSource={require('../../assets/nationalfolkmuseum.jpg')}
          header="UNESCO World Heritage Sites" />
      </View>

        {/* SCROLL VIEW CONTAINER*/}
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          {/* 
          This is the reusable component I have created that combines View, Text and Image components 
          This component follows best-practice for reducing the amount of repeated code for displaying content*/}

          <ImagesLayoutComponent
            imageSource={require('../../assets/hwaseongfortress.jpg')}
            title="Hwaseong Fortress - Gyeonggi-do"
            urlLink={hwaseongLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/changdeokgung.jpg')}
            title="Changdeokgung Palace - Seoul"
            urlLink={changdeokgungLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/bulguksa.jpg')}
            title="Bulguksa Temple - North Gyeongsang"
            urlLink={bulguksaLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/gyeongjusi.jpg')}
            title="Gyeongju 5 Historic Areas - Gyeongju)"
            urlLink={gyeongjusilLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/jongmyoshrine.jpg')}
            title="Jongmyo Shrine - Seoul"
            urlLink={jongmyoshrineLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/seokguram.jpg')}
            title="Seokguram - Gyeongsanbuk-do"
            urlLink={seokguramLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/royaltombs.jpg')}
            title="Royal Tombs of the Joseon Dynasty"
            urlLink={royaltombsLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/gochang.jpg')}
            title="Gochang, Hwasun and Ganghwa Dolmen Sites"
            urlLink={gochangLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/haeinsa.jpg')}
            title="Haeinsa Temple - Gyeongsangnamdo"
            urlLink={haeinsaLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/baekje.jpg')}
            title="Baekje Historic Areas - Gongju, Buyeo, Iksan"
            urlLink={baekjeLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/tripitaka.jpg')}
            title="Tripitaka Koreana - Haepchon"
            urlLink={tripitakaLink}
          />
          <ImagesLayoutComponent
            imageSource={require('../../assets/jeju.jpg')}
            title="Jeju Volcanic Island and Lava Tubes - Jeju"
            urlLink={jejuLink}
          />
          
        </ScrollView>

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


export default EstablishmentsScreen;