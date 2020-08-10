import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MainInfoScreen from './src/screens/MainInfoScreen';
import EstablishmentsScreen from './src/screens/EstablishmentsScreen';
import FunFactsScreen from './src/screens/FunFactsScreen';
import CulturalAspectsScreen from './src/screens/CulturalAspectsScreen';
import AboutScreen from './src/screens/AboutScreen';
import DishesScreen from './src/screens/DishesScreen';
import MapScreen from './src/screens/MapScreen';
import * as firebase from 'firebase';
import {StatusBar} from 'react-native';

//Method for changing the color of the status bar
StatusBar.setBackgroundColor('rgba(255, 255, 255, 0.3)');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",// Insert Api Key Here, Alex check your e-mail
  authDomain: "rn-my-project.firebaseapp.com",
  databaseURL: "https://rn-my-project.firebaseio.com",
  projectId: "rn-my-project",
  storageBucket: "rn-my-project.appspot.com",
  messagingSenderId: "149746400341",
  appId: "1:149746400341:web:6e345cd3d1accae63aa8dc",
  measurementId: "G-EPV9GCPGJQ"
};
// Initialize Firebase, fix for error of duplicate app. 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
{/*
This is a method that creates a navigator for the application
Below you may name the screens as you would like so later you may point the buttons for navigating through screens
*/}
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MainInfo: MainInfoScreen, 
    Establishments: EstablishmentsScreen, 
    FunFacts: FunFactsScreen, 
    CulturalAspects: CulturalAspectsScreen,
    About: AboutScreen, 
    Dishes: DishesScreen,
    Map: MapScreen,


  },
  {
    /*
    These are basically where you can configure the styling of your App headers and default page
    */
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Korify', 
      headerStyle: {
        backgroundColor: 'black', 
        
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold', 
        color: 'white',
      }, 
    },
  },
);

export default createAppContainer(navigator);
