import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AdBanner from '../../shared/components/AdBanner'
import AdBannerTop from '../../shared/components/AdBannerTop'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles/Chapter.style'

const Chapter = props => {
  const { content, translators, revisors } = props.chapter
  return (
    <View style={styles.mainContainer}>

      <View style={styles.adContainer}>
        <AdBannerTop />
      </View>

      <View style={{flex: 0.8}}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.iconWithText}>
              <Icon name='closed-caption' size={18} color='#717171' />
              <Text>{translators}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon name='spellcheck' size={18} color='#717171' />
              <Text>{revisors}</Text>
            </View>
          </View>
          <Text style={styles.textChapter}>
            {content}
          </Text>
          <Text style={styles.textNoticeEndOfChapter}>
            - Fim do Capítulo -
          </Text>
          <Text style={styles.textNoticeEndOfChapter}>
            Obrigado por ler com a Super Novel Reader !
          </Text>
        </ScrollView>
      </View>

      <View style={styles.adContainer}>
        <AdBanner />
      </View>

    </View>
  )
}

export default Chapter
