import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MovieDetail from '../components/movieDetail/index'

export default class SearchResultScreen extends Component {
  static navigationOptions = {
    title: 'Movie Details'
  }
  
  render() {
    const { navigation } = this.props
    const { params: { movie } } = navigation.state

    return(
      <View>
        <MovieDetail movie={movie} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})