import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { ListNovels } from '../components/ListNovels'

import { getAllNovels } from '../../../services/backend/novelService'
import { NOVEL_SCREEN } from '../../../navigation/routes'

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

  navigateToNovel = () => this.props.navigator.push(NOVEL_SCREEN)

  render () {
    return (
      <View style={styles.container}>
        <ListNovels
          novels={this.state.novels}
          navigateToNovel={(novel) => this.navigateToNovel(novel)}
        />
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
