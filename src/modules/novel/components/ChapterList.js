import React, { Component } from 'react'
import { FlatList } from 'react-native'
import {ChapterListRow, ChapterListFooter} from './ChapterItemsList'

class ChapterList extends Component {
  renderRow = (data) => {
    const { item, index } = data
    return <ChapterListRow
      chapter={item}
      protected={index % 2 === 0}
    />
  }

  renderFooter = (data) => {
    const { item } = data
    console.log('footer', item)
    return <ChapterListFooter />
  }

  keyExtractor = item => item._id.toString()
  render () {
    return (
      <FlatList
        data={this.props.chapters}
        numColumns={1}
        renderItem={this.renderRow}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

export default ChapterList
