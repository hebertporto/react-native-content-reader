import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles/ItemChapter.style'

const renderChapter = (props) => (
  <TouchableOpacity onPress={() => console.warn('go chapter')}>
    <View style={styles.listItem}>
      <View style={styles.imageContainer2}>
        <Text> {props.chapter._id} </Text>
      </View>
      <View style={styles.chapterTitle}>
        <Text numberOfLines={1}> titulo titulo titulo titulo titulo titulo titulo </Text>
      </View>
    </View>
  </TouchableOpacity>
)
const adviser = (
  <TouchableOpacity onPress={() => console.warn('go chapter')}>
    <View style={styles.listItem}>
      <View style={styles.chapterTitle}>
        <Text numberOfLines={1}> ANUNCIO </Text>
      </View>
    </View>
  </TouchableOpacity>
)

export const ChapterItemList = props => {
  console.log('*', props.protected)
  return props.protected ? adviser : renderChapter(props)
}
