import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { viewTracker } from '../../../config/analytics';

class OfflineContainer extends Component {
  componentDidMount() {
    viewTracker('OfflineScreen')
  }
  render () {
    return (
      <View>
        <Text style={styles.title}>
          Em Breve
        </Text>
        <Text style={styles.text}>
          Será possível salvar capítulos de suas Novels favoritas e ler offline!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingTop: 80,
    fontSize: 22
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5,
    paddingHorizontal: 40
  }
})

export const OfflineScreen = OfflineContainer
