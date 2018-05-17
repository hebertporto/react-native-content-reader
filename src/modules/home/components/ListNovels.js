import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import { ItemNovel } from './ItemNovel'

class ListNovelsContainer extends Component {
  renderNovel = () => <ItemNovel />
  keyExtractor = item => item.id.toString()
  render() {
    const items = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
      {id: 11}
    ]
    return (
      <FlatList
        data={items}
        numColumns={3}
        renderItem={this.renderNovel}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

ListNovelsContainer.propTypes = {
  novels: PropTypes.array
}

export const ListNovels = ListNovelsContainer
