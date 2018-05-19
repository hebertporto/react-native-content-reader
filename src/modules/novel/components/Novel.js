import React from 'react'
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

import { styles } from './styles/Novel.style.js'

const Novel = () => {
  return (
    <ImageBackground
      source={{
        uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
            />
          </View>
          <Text>opa</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Novel
