import React, {Component} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import MovieCard from '../components/movieCard/index'
import axios from 'axios'

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get('http://api.tvmaze.com/shows?page=1')
      .then((res) => {
        this.setState({movies: res.data})
      })
  }

  handleTouch = (movie) => {
    this.props.navigation.navigate('SearchResult', { movie })
  }

  render() {
    const { movies } = this.state
    return (
      <View style={styles.container}>
        {!!movies.length && 
          <FlatList
            data={movies.splice(0,10)}
            renderItem={({item}) => <MovieCard movie={item} handleTouch={() => this.handleTouch(item)} />}
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