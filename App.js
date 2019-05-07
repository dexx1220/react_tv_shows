
import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';

// screens
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'
import SearchResultScreen from './screens/SearchResult'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    SearchResult: SearchResultScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff'
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
