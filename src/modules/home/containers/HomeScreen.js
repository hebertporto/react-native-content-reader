import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { SearchBar } from '../components/SearchBar'
import { ListNovels } from '../components/ListNovels'

class HomeContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ListNovels />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const HomeScreen = HomeContainer
