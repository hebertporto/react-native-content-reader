import React, { Component } from 'react'
import Chapter from '../components/Chapter'
import { getChapterById } from '../../../services/backend/novelService'
import { viewTracker } from '../../../config/analytics'

class ChapterContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  }

  state = {
    chapter: {}
  }

  componentDidMount() {
    viewTracker(this.props.trackChapter)
    const { chapterProps } = this.props
    this.getChapter(chapterProps._id)
  }
  getChapter = async (id) => {
    const chapter = await getChapterById(id)
    this.setState({chapter})
  }
  render () {
    const { chapter } = this.state
    return (
      <Chapter
        chapter={chapter}
      />
    )
  }
}

export const ChapterScreen = ChapterContainer
