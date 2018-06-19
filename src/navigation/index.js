import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createStore } from '../config/redux'

import { registerScreens } from './screens'

import {
  navigatorStyleNovels,
  navigatorStyleFavoritos,
  navigatorStyleOffline,
  appStyleMain
} from './styles/navigation.style'

import './buttons'

import { HOME_SCREEN, BOOKMARK_SCREEN, OFFLINE_SCREEN } from './routes'

const store = createStore()

registerScreens(store, Provider)

export function startApp () {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Novels',
        screen: HOME_SCREEN.screen,
        icon: require('../assets/icons/interface.png'),
        title: HOME_SCREEN.title,
        navigatorStyle: navigatorStyleNovels
      },
      {
        label: 'Favoritos',
        screen: BOOKMARK_SCREEN.screen,
        icon: require('../assets/icons/star.png'),
        title: BOOKMARK_SCREEN.title,
        navigatorStyle: navigatorStyleFavoritos
      },
      {
        label: 'Offline',
        screen: OFFLINE_SCREEN.screen,
        icon: require('../assets/icons/download.png'),
        title: OFFLINE_SCREEN.title,
        navigatorStyle: navigatorStyleOffline
      }
    ],
    appStyle: appStyleMain,
    animationType: 'fade'
  })
}
