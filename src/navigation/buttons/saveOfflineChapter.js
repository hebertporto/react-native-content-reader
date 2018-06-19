import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const saveOfflineChapter = ({ text, chapter }) =>
  <TouchableOpacity
    style={[styles.button, { backgroundColor: 'tomato' }]}
    onPress={() => console.log('pressed me!', chapter)}
  >
    <View style={styles.button}>
      <Text style={{ color: 'white' }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>

Navigation.registerComponent('saveOfflineChapter', () => saveOfflineChapter)
