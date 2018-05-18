import { Fonts } from '../constants/fonts'

const style = {
  navBarTextColor: '#FFFFFF',
  navBarBackgroundColor: '#2196F3',
  navBarTitleTextCentered: true,
  navBarButtonColor: '#FFFFFF',
  navBarTextFontFamily: Fonts.type.kefa,
  navBarTextFontSize: Fonts.size.regular
}

export const HOME_SCREEN = {
  screen: 'snr.home',
  title: 'Super Novel Reader',
  navigatorStyle: style
}

export const NOVEL_SCREEN = {
  screen: 'snr.novel',
  title: 'Novel',
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
