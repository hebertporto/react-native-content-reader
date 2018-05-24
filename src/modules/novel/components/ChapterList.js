import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'
// import ItemChapter from './ItemChapter'

class ChapterList extends Component {
  renderChapter = ({ item }) => (
    <View>
      <Text> Nome do Capitulo </Text>
    </View>
  )
  keyExtractor = item => item._id.toString()
  render () {
    return (
      <FlatList
        data={this.props.chapters}
        numColumns={1}
        renderItem={this.renderChapter}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

export default ChapterList
