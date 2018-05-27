import React, { Component } from 'react'
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image,
  Animated
} from 'react-native'
import Divider from '../../shared/components/Divider'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles/Novel.style.js'
import ChapterList from './ChapterList'

class Novel extends Component {
  state = {
    fadeAnim: new Animated.Value(0.3) // Initial value for opacity: 0
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500
      }
    ).start()
  }
  render () {
    return (
      <ImageBackground
        source={{
          uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
        style={styles.containerImageBackground}
      >
        <ScrollView>
          <Animated.View style={[styles.imageCardContainer, {opacity: this.state.fadeAnim}]}>
            <View style={styles.imageBox}>
              <Image
                style={styles.image}
                source={{
                  uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
              />
            </View>
          </Animated.View>
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
                <Text
                  style={styles.labelContainerText}
                  numberOfLines={1}>
                  Henrique Zimmerer Zimmerer Zimmerer Zimmerer
                </Text>
              </View>
            </View>

            <View style={[styles.scanContainer, {marginTop: 5}]}>
              <View style={styles.labelContainer}>
                <Icon name="translate" size={14} />
                <Text style={styles.labelContainerText}>Sakai Scan</Text>
              </View>
            </View>

            <View style={styles.lastChapterContainer}>
              <Icon name="book" size={14} />
              <Text style={styles.labelContainerTextChapter}>#100 </Text>
              <Icon name="book" size={14} />
              <Text style={styles.labelContainerTextDate}>20/02/2018</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text>
                Descrição
              </Text>
            </View>

            <Divider />

            <View style={{ flex: 1 }}>
              <ChapterList
                chapters={[{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}, {_id: 5}, {_id: 6}, {_id: 7}]}
              />
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default Novel
