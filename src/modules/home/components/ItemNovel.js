import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/ItemNovel.style'

export const ItemNovel = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.warn('clicou na novel')}>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
        style={styles.image}
      />
    </View>
    <Text style={styles.title} numberOfLines={2}>A Crônica de Eastar</Text>
  </TouchableOpacity>
)

ItemNovel.propTypes = {
  novel: PropTypes.object
}
