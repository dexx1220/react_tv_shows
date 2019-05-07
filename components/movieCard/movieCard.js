import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const MovieCard = ({movie}) => {
  const { id, url, name } = movie
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{url}</Text>
    </View>
  )
}

export default MovieCard