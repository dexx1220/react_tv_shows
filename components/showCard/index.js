import React from 'react'
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native'

const DetailText = ({text}) => {
  return (
    <Text style={styles.detailText}>{text}</Text>
  )
}

const ShowCard = ({show, handleTouch}) => {
  const { genres, image, language, name, network, officialSite, status } = show
  return (
    <TouchableHighlight onPress={handleTouch}>
      <View style={styles.container}>
        {image &&
          <Image source={{uri: image.medium }} style={styles.image} />
        }
        <View style={styles.details}>
          <DetailText text={name} />
          <DetailText text={`Language: ${language}`} />
          <DetailText text={`Status: ${status}`} />
          {network &&
            <DetailText text={`Network: ${network.name}`} />
          }
          <DetailText text={`Official site: ${officialSite}`} />
          {!!genres.length &&
            <DetailText text={`Genres: ${genres.join(', ')}`} />
          }
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ShowCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: 'indigo',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  detailText: {
    marginBottom: 10
  }
})