import { Fonts } from '../constants/fonts'

const style = {
  navBarTextColor: '#FFFFFF',
  navBarSubtitleColor: '#FFFFFF',
  navBarBackgroundColor: '#2196F3',
  navBarTitleTextCentered: true,
  navBarSubTitleTextCentered: true,
  navBarButtonColor: '#FFFFFF',
  // navBarTextFontFamily: Fonts.type.kefa,
  navBarTextFontSize: Fonts.size.regular
}

const styleNovel = {
  ...style,
  navBarHidden: true
}

export const HOME_SCREEN = {
  screen: 'snr.home',
  title: 'Super Novel Reader',
  navigatorStyle: style
}

export const NOVEL_SCREEN = {
  screen: 'snr.novel',
  title: 'Novel',
  navigatorStyle: styleNovel
}

export const CHAPTER_SCREEN = {
  screen: 'snr.chapter',
  title: 'Chapter',
  navigatorStyle: style
}

export const BOOKMARK_SCREEN = {
  screen: 'snr.bookmark',
  title: 'Favoritos',
  navigatorStyle: style
}

export const OFFLINE_SCREEN = {
  screen: 'snr.offline',
  title: 'Conteúdo Offline',
  navigatorStyle: style
}
