import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/ItemChapter.style'

export const ItemChapter = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.warn('capitulo')}>
    <View>
      <Text> Nome do Capitulo </Text>
    </View>
  </TouchableOpacity>
)

ItemChapter.propTypes = {
  chapter: PropTypes.object
}
