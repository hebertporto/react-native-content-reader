import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/ItemNovel.style'

export const ItemNovel = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.warn('clicou na novel')}>
    <View elevation={5} style={styles.imageContainer}>
      <Image
        source={{ uri: props.novel.cover_url }}
        style={styles.image}
      />
    </View>
    <Text style={styles.title} numberOfLines={2}>{props.novel.name}</Text>
  </TouchableOpacity>
)

ItemNovel.propTypes = {
  novel: PropTypes.object
}
