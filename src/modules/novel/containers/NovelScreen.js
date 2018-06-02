import React, { Component } from 'react'
import Novel from '../components/Novel'

class NovelContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  }

  render () {
    return (
      <Novel
        novel={this.props.novel}
      />
    )
  }
}

export const NovelScreen = NovelContainer
