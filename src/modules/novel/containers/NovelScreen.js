import React, { Component } from 'react'
import Novel from '../components/Novel'
import { HOME_SCREEN, CHAPTER_SCREEN } from '../../../navigation/routes'
import { getNovelChapters } from '../../../services/backend/novelService'

class NovelContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  }
  state = {
    titles: []
  }
  componentDidMount = () => {
    const { _id } = this.props.novel
    this.getChaptersTitle(_id)
  }

  getChaptersTitle = async (id) => {
    const titles = await getNovelChapters(id)
    console.log('=*=', titles)
    this.setState({titles})
  }

  goBack = () => this.props.navigator.push({...HOME_SCREEN, backButtonHidden: true})
  navigateToChapter = (chapterProps) => {
    this.props.navigator.push({
      ...CHAPTER_SCREEN,
      passProps: {chapterProps},
      title: this.props.novel.name,
      subtitle: `${chapterProps.number} - ${chapterProps.title}`
    })
  }
  render () {
    const { titles } = this.state
    return (
      <Novel
        novel={this.props.novel}
        chaptersTitles={titles}
        goBack={this.goBack}
        navigateToChapter={this.navigateToChapter}
      />
    )
  }
}

export const NovelScreen = NovelContainer
