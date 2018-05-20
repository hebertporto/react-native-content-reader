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
          <View>
            <Text>Autor, Scan, Tradutor, Revisor</Text>
          </View>
          <View>
            <Text>Capítulos</Text>
          </View>
          <View>
            <Text>
              Descrição
            </Text>
          </View>
          <View>
            <Text>
              Lista de Capítulos
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Novel
