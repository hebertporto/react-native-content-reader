import React from 'react'
import { ImageBackground, Text, View, ScrollView } from 'react-native'

import { styles } from './styles/Novel.style.js'

const Novel = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={{ uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
        style={styles.container}
      >
        <View style={styles.box}>
          <Text>opa</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default Novel
