import React from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'

const MovieDetail = ({movie}) => {
  const htmlRegex = /(<([^>]+)>)/ig
  return (
    <ScrollView>
      <Image source={{uri: movie.image.medium}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text>{movie.name}</Text>
        <Text>Premiered: {movie.premiered}</Text>
        <Text>Official Site: {movie.officialSite}</Text>
        <Text>Network: {movie.network.name}</Text>
        <Text>Schedule: {movie.schedule.time} on {movie.schedule.days.join(', ')}</Text>
        <Text style={styles.summary}>{movie.summary.replace(htmlRegex, '')}</Text>
      </View>
    </ScrollView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10
  },
  image: {
    height: 400,
    width: '100%'
  },
  summary: {
    marginTop: 20,
    paddingBottom: 30
  }
})