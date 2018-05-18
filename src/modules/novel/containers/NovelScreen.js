import React, { Component } from 'react'
import Novel from '../components/Novel'

class NovelContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  }
  render () {
    return (
      <Novel />
    )
  }
}

export const NovelScreen = NovelContainer
