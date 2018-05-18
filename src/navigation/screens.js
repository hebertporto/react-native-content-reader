import { Navigation } from 'react-native-navigation'

import { HomeScreen } from '../modules/home/containers/HomeScreen'
import { NovelScreen } from '../modules/novel/containers/NovelScreen'
import { BookmarkScreen } from '../modules/bookmark/containers/BookmarkScreen'
import { OfflineScreen } from '../modules/offline/containers/OfflineScreen'

import { HOME_SCREEN, NOVEL_SCREEN, BOOKMARK_SCREEN, OFFLINE_SCREEN } from './routes'

export function registerScreens () {
  Navigation.registerComponent(HOME_SCREEN.screen, () => HomeScreen)
  Navigation.registerComponent(NOVEL_SCREEN.screen, () => NovelScreen)
  Navigation.registerComponent(BOOKMARK_SCREEN.screen, () => BookmarkScreen)
  Navigation.registerComponent(OFFLINE_SCREEN.screen, () => OfflineScreen)
}
