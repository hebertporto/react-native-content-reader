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
    console.log('componentDidMount')
    this.fetchNovels()
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  fetchNovels = async () => {
    const novels = await getAllNovels()
    this.setState({ novels })
  }

  navigateToNovel = (novel) => {
    this.props.navigator.push({...NOVEL_SCREEN, passProps: {novel}})
  }

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
