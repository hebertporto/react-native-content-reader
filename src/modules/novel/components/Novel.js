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
              <Text>Henrique Zimmerer</Text>
            </View>

            <View style={styles.labelContainer}>
              <Icon name="translate" size={14} />
              <Text>Sakai Scan</Text>
            </View>
          </View>

          <View style={styles.scanContainer}>
            <Text>100</Text>
            <Text>A espada mágica de ultron</Text>
            <Text>20/02/2018</Text>
          </View>

          <View style={styles.scanContainer}>
            <Text>
              Descrição
            </Text>
          </View>

          {/* <ChapterList chapters={[{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}, {_id: 5}]} /> */}

        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Novel
