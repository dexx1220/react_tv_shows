import React, {Component} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import { debounce } from 'lodash'
import ShowCard from '../components/showCard/index'
import axios from 'axios'

const ITEMS_PER_PAGE = 50
const MAX_PER_PAGE = 250
const GET_SHOWS_URL = 'http://api.tvmaze.com/shows'
const SEARCH_SHOWS_URL = 'http://api.tvmaze.com/search/shows'

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flatListReady: false,
      page: 1,
      searchText: '',
      shows: [],
      showsShown: [],
      startIndex: 0
    }
  }

  componentDidMount() {
    const { startIndex } = this.state
    this.getShows()
  }

  getShows = () => {
    let { page, searchText, shows, showsShown, startIndex } = this.state
    if (searchText.length) return
    if (shows.length && startIndex < shows.length) {
      this.setState({
        showsShown: showsShown.concat(shows.slice(startIndex, startIndex + ITEMS_PER_PAGE)),
        startIndex: startIndex + ITEMS_PER_PAGE
      })
    } else {
      axios.get(GET_SHOWS_URL + `?page=${page}`)
        .then(res => {
          const data = shows.length > 0 ? shows.concat(res.data) : res.data
          this.setState({
            shows: data,
            showsShown: showsShown.concat(data.slice(startIndex, startIndex + ITEMS_PER_PAGE)),
            startIndex: startIndex + ITEMS_PER_PAGE,
            page: page + 1
          })
        })
    }
  }

  searchShows = (val) => {
    axios.get(SEARCH_SHOWS_URL + `?q=${val}`)
      .then(res => {
        const data = res.data.map(d => d.show)
        this.setState({
          shows: data,
          showsShown: data,
          startIndex: 0,
          page: 1
        })
      })
  }

  scrolled = () => {
    const { flatListReady } = this.state
    if (!flatListReady) {
      this.setState({flatListReady: true})
    }
  }

  handleTextChange = (text) => {
    this.setState({searchText: text})
    if (text.length < 3) return
    this.searchShows(text)
  }

  handleTouch = (movie) => {
    this.props.navigation.navigate('SearchResult', { movie })
  }

  render() {
    const { searchText, showsShown } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Search Shows'
          value={searchText}
          onChangeText={debounce(this.handleTextChange, 500)}
          style={styles.search}
        />
        {!!showsShown.length && 
          <FlatList
            data={showsShown}
            renderItem={({item}) => <ShowCard show={item} handleTouch={() => this.handleTouch(item)} />}
            keyExtractor={item => item.id.toString()}
            onScroll={this.scrolled}
            onEndReached={this.getShows}
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
  search: {
    height: 30,
    width: 100
  }
})