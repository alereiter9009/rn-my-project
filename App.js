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
    These are basically where you can configure the styling of your App headers as well as pointing to the default page
    */
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Korify', 
      headerStyle: {
        backgroundColor: '#67cdf5',
      },
      headerTitleStyle: {
        fontWeight: 'bold', 
      }, 
    },
  },
);

export default createAppContainer(navigator);


/*
For Centering header Title of Application

        headerTitleAlign: {
        headerTitleAlign: 'center'
      }
*/