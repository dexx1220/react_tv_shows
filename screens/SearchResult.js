import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ShowDetail from '../components/showDetail/index'

export default class SearchResultScreen extends Component {
  static navigationOptions = {
    title: 'Show Details'
  }
  
  render() {
    const { navigation } = this.props
    const { params: { movie } } = navigation.state

    return(
      <View>
        <ShowDetail movie={movie} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})