import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { styles } from './styles/Chapter.style'

const Chapter = props => {
  const { _id, title, content } = props.chapter
  return (
    <View style={styles.mainContainer}>

      <View style={{flex: 0.9}}>
        <View>
          <Text>
            {title} {_id}
          </Text>
        </View>
        <ScrollView>
          <Text style={styles.textChapter}>
            {content}
          </Text>
          <Text style={styles.textNoticeEndOfChapter}>
            --- Fim do Capítulo --- Obrigado por ler com a
            Super Novel Reader
          </Text>
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <Text>
          AD
        </Text>
      </View>

    </View>
  )
}

export default Chapter
