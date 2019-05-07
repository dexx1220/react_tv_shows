import React, {Component} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import MovieCard from '../components/movieCard/movieCard'
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

  render() {
    const { movies } = this.state
    return (
      <View style={styles.container}>
        {!!movies.length && 
          <FlatList
            data={movies.splice(0,10)}
            renderItem={({item}) => <MovieCard movie={item} />}
            keyExtrator={item => item.id}

          />
        }
        <Button
          title='Back to Home'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  title: {}
})