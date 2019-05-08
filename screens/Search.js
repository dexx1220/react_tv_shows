import React, {Component} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import ShowCard from '../components/showCard/index'
import axios from 'axios'

const ITEMS_PER_PAGE = 50

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      showsShown: [],
      page: 1,
      startIndex: 0
    }
  }

  componentDidMount() {
    const { startIndex } = this.state
    axios.get(`http://api.tvmaze.com/shows?page=${this.state.page}`)
      .then((res) => {
        this.setState({
          shows: res.data,
          showsShown: res.data.splice(startIndex, 50)
        })
      })
  }

  handleTouch = (movie) => {
    this.props.navigation.navigate('SearchResult', { movie })
  }

  render() {
    const { showsShown } = this.state
    return (
      <View style={styles.container}>
        {!!showsShown.length && 
          <FlatList
            data={showsShown}
            renderItem={({item}) => <ShowCard show={item} handleTouch={() => this.handleTouch(item)} />}
            keyExtractor={item => item.id.toString()}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 45 ,
    paddingRight: 45
  },
  title: {}
})