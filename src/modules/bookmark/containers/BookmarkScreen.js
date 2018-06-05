import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class BookmarkContainer extends Component {
  render () {
    return (
      <View>
        <Text style={styles.title}>
          Em Breve
        </Text>
        <Text style={styles.text}>
          Uma lista somente com suas novels favoritas!
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
    paddingTop: 5
  }
})

export const BookmarkScreen = BookmarkContainer
