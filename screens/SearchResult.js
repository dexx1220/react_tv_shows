import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class SearchResultScreen extends Component {
  static navigationOptions = {
    title: 'Search Result'
  }
  
  render() {
    return(
      <View>
        <Button
          title='Back to Search'
          onPress={() => this.props.navigation.goBack()}
        />

        <Button
          title='Back Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})