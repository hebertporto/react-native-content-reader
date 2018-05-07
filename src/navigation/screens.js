import { Navigation } from 'react-native-navigation'

import { HomeScreen } from '../modules/home/containers/HomeScreen'
import { NovelScreen } from '../modules/novel/containers/NovelScreen'

export function registerScreens () {
  Navigation.registerComponent('snr.home', () => HomeScreen)
  Navigation.registerComponent('snr.novel', () => NovelScreen)
}
