import { Navigation } from 'react-native-navigation'

import { HomeScreen } from '../modules/home/containers/HomeScreen'

export function registerScreens () {
  Navigation.registerComponent('snr.home', () => HomeScreen)
}
