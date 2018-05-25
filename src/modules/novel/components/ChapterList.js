import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'
import {ChapterItemList} from './ChapterItemList'

class ChapterList extends Component {
  renderFooter = () => (
    <View style={{flex: 1}}>
      <Text>
        Rodape
      </Text>
    </View>
  )
  renderChapter = (data) => {
    const { item, index } = data
    return <ChapterItemList chapter={item} protected={index % 2 === 0}/>
  }
  keyExtractor = item => item._id.toString()
  render () {
    return (
      <FlatList
        data={this.props.chapters}
        numColumns={1}
        renderItem={this.renderChapter}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

export default ChapterList
