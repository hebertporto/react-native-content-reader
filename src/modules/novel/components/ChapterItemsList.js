import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {RkButton} from 'react-native-ui-kitten'
import moment from 'moment'

import { styles } from './styles/ItemChapter.style'

const checkDate = (chapterDate) => {
  const todayTimestamp = new Date().getTime() + (30 * 24 * 60 * 60 * 1000)
  if (todayTimestamp < chapterDate) {
    return moment(chapterDate).startOf('day').fromNow()
  }
  return moment(chapterDate).format('DD.MM.YYYY')
}
const rowChapter = (props) => (
  <TouchableOpacity onPress={() => props.navigateToChapter(props.chapter)}>
    <View style={styles.row}>
      <View style={styles.containerNumber}>
        <Text> {props.chapter.number} </Text>
      </View>
      <View style={styles.containerTitle}>
        <Text numberOfLines={1}> {props.chapter.title} </Text>
      </View>
      <View style={styles.containerDate}>
        <Text style={{fontSize: 9}}>
          {checkDate(props.chapter.created_at)}
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
