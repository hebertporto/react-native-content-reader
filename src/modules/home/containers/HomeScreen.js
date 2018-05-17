import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { SearchBar } from '../components/SearchBar'
import { ListNovels } from '../components/ListNovels'

import { getAllNovels } from '../../../services/backend/novelService'

class HomeContainer extends Component {
  state = {
    novels: []
  }
  componentDidMount = () => {
    this.fetchNovels()
  }

  fetchNovels = async () => {
    const novels = await getAllNovels()
    this.setState({ novels })
    console.log('novels', novels)
  }

  render () {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ListNovels novels={this.state.novels} />
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
