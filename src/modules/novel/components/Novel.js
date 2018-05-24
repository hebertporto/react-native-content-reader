import React from 'react'
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import Divider from '../../shared/components/Divider'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles/Novel.style.js'
import ChapterList from './ChapterList'

const Novel = () => {
  return (
    <ImageBackground
      source={{
        uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
      style={styles.containerImageBackground}
    >
      <ScrollView>
        <View style={styles.imageCardContainer}>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyContent}>
            <Text style={styles.title}>
              Rebirth of the Thief Who Roamed the World
            </Text>
          </View>

          <Divider />

          <View style={styles.scanContainer}>
            <View style={styles.labelContainer}>
              <Icon name="account-circle" size={14} />
              <Text style={styles.labelContainerText}>Henrique Zimmerer Zimmerer Zimmerer</Text>
            </View>

            <View style={styles.labelContainer}>
              <Icon name="translate" size={14} style={{ marginLeft: 25 }}/>
              <Text style={styles.labelContainerText}>Sakai Scan</Text>
            </View>
          </View>

          <View style={styles.scanContainer}>
            <Icon name="book" size={14} />
            <Text style={styles.labelContainerTextChapter}>100</Text>
            <Text style={styles.labelContainerTextChapter}>A espada mágica de ultron</Text>
            <Text style={styles.labelContainerTextChapter}>20/02/2018</Text>
          </View>

          <View style={styles.scanContainer}>
            <Text>
              Descrição
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ChapterList chapters={[{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}, {_id: 5}]} />
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Novel
