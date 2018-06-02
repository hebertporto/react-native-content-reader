import React, { Component } from 'react'
import Novel from '../components/Novel'
import { HOME_SCREEN } from '../../../navigation/routes'

class NovelContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  }
  goBack = () => this.props.navigator.push({...HOME_SCREEN, backButtonHidden: true})
  render () {
    return (
      <Novel
        novel={this.props.novel}
        goBack={this.goBack}
      />
    )
  }
}

export const NovelScreen = NovelContainer
