import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {RkButton} from 'react-native-ui-kitten'

import { styles } from './styles/ItemChapter.style'

const rowChapter = (props) => (
  <TouchableOpacity onPress={() => console.warn('go chapter')}>
    <View style={styles.row}>
      <View style={styles.containerNumber}>
        <Text> 152 </Text>
      </View>
      <View style={styles.containerTitle}>
        <Text numberOfLines={1}> titulo titulo titulo titulo titulo titulo titulo </Text>
      </View>
      <View style={styles.containerDate}>
        <Text style={{fontSize: 9}}>
          20.05.2018
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)
// const rowChapterProtected = (
//   <View style={styles.row}>
//     <Text> Clique no ADS </Text>
//   </View>
// )

export const ChapterListRow = props => rowChapter(props)

export const ChapterListFooter = props => {
  return (
    <View style={styles.footerContainer}>
      <RkButton style={styles.button}>Carregar Mais</RkButton>
    </View>
  )
}
